import os
import re
import sys
import socket
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

# Directory paths
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BACKEND_DIR)
FRONTEND_DIR = os.path.join(PROJECT_ROOT, 'frontend')

# Ensure correct MIME types for video and web assets
mimetypes.init()
mimetypes.add_type('video/mp4', '.mp4')
mimetypes.add_type('video/webm', '.webm')
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/json', '.json')

class RangeHTTPRequestHandler(SimpleHTTPRequestHandler):
    """
    HTTP handler supporting Byte-Range requests (RFC 7233).
    Serves static files directly from the frontend directory.
    """
    protocol_version = 'HTTP/1.1'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        if not os.path.exists(path):
            return super().send_head()

        range_header = self.headers.get('Range')
        if not range_header:
            return super().send_head()

        try:
            total_length = os.path.getsize(path)
            m = re.match(r'bytes=(\d*)-(\d*)', range_header.strip())
            if not m:
                return super().send_head()

            start_str, end_str = m.groups()
            if start_str and end_str:
                start = int(start_str)
                end = int(end_str)
            elif start_str:
                start = int(start_str)
                end = total_length - 1
            elif end_str:
                start = total_length - int(end_str)
                end = total_length - 1
            else:
                return super().send_head()

            if start >= total_length or start < 0 or end < start:
                self.send_error(416, "Requested Range Not Satisfiable")
                return None

            end = min(end, total_length - 1)
            content_length = end - start + 1

            self.send_response(206)
            ctype = self.guess_type(path) or 'video/mp4'
            self.send_header('Content-Type', ctype)
            self.send_header('Content-Range', f'bytes {start}-{end}/{total_length}')
            self.send_header('Content-Length', str(content_length))
            self.end_headers()

            f = open(path, 'rb')
            f.seek(start)
            return RangeFileWrapper(f, content_length)
        except Exception:
            return super().send_head()

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

class RangeFileWrapper:
    def __init__(self, f, length):
        self.f = f
        self.remaining = length

    def read(self, size=-1):
        if self.remaining <= 0:
            return b''
        if size < 0 or size > self.remaining:
            size = self.remaining
        data = self.f.read(size)
        if not data:
            self.remaining = 0
            return b''
        self.remaining -= len(data)
        return data

    def close(self):
        self.f.close()

class DualStackServer(ThreadingHTTPServer):
    def __init__(self, server_address, RequestHandlerClass):
        self.address_family = socket.AF_INET6
        super().__init__(server_address, RequestHandlerClass)

    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        return super().server_bind()

def run(port=8000):
    try:
        httpd = DualStackServer(('::', port), RangeHTTPRequestHandler)
    except Exception:
        httpd = ThreadingHTTPServer(('0.0.0.0', port), RangeHTTPRequestHandler)
    print("=" * 60, flush=True)
    print(f">> RhymeVerse Server is running!", flush=True)
    print(f">> Local URL: http://localhost:{port}/", flush=True)
    print(f">> Serving frontend directory: {FRONTEND_DIR}", flush=True)
    print(f">> Range streaming & DualStack IPv4/IPv6 enabled", flush=True)
    print("=" * 60, flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    port = 8000
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run(port)
