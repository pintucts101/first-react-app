#!/bin/bash
cd /var/www/html/goequipme-website
# Start Node.js server with forever
forever start /var/www/html/goequipme-website/server.js
