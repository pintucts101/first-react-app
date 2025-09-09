#!/bin/bash
cd /var/www/html/goequipme-app
# Start Node.js server with forever
forever start /var/www/html/goequipme-app/server.js
