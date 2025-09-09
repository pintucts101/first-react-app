#!/bin/bash
# Check if API is responding
curl -s http://localhost:3000/api/hello | grep "Hello" >/dev/null
if [ $? -eq 0 ]; then
  echo "Deployment Successful!"
else
  echo "Deployment Failed!"
  exit 1
fi
