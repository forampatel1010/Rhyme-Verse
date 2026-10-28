#!/usr/bin/env python3
"""
RhymeVerse - Root Launcher
Convenient single-command script to start the server.

Usage:
    python start.py         # Runs on default port 8000
    python start.py 8080    # Runs on custom port
"""

import sys
import os

# Add backend directory to Python path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'backend'))
import server

if __name__ == '__main__':
    port = 8000
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    server.run(port)
