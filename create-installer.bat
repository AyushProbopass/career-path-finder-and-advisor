#!/bin/bash
echo "Building Career Path Finder..."

# Build frontend
cd frontend
npm run build

# Build Electron
cd ../electron-app
npm run dist-mac

echo "Build complete! Check electron-app/dist/"