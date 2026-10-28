# RhymeVerse Backend Server

A lightweight, high-performance Python HTTP server tailored for streaming HTML5 multimedia files (MP4 video and audio) and serving frontend assets.

## Features

- **RFC 7233 Byte-Range Requests (`206 Partial Content`)**: Enables HTML5 media players (Chrome, Safari, Edge, Firefox) to seek, buffer, and load metadata instantly.
- **Dual-Stack Socket (`IPv4` + `IPv6`)**: Binds to `[::]:8000` so `localhost`, `127.0.0.1`, and local network addresses resolve cleanly.
- **Multi-Threaded (`ThreadingHTTPServer`)**: Media buffering streams asynchronously on background threads without blocking client UI requests or asset delivery.
- **Automatic Frontend Root Resolution**: Directly mounts the `frontend/` directory so all HTML, CSS, JS, and rhyme media files are served at the root URL.
- **Zero External Dependencies**: Pure Python standard library implementation (`http.server`, `socket`, `mimetypes`).

## Usage

```bash
# From project root
python backend/server.py

# Or specify a custom port
python backend/server.py 8080
```
