#!/bin/bash
pkill -f "vite" || pkill -f "npm run dev" || pkill -f "npm start" || true
sleep 2
mkdir -p logs
npm install && npm run dev > logs/server.log 2>&1 &
echo "Server started in background, PID: $!"
