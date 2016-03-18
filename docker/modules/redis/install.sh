#!/bin/bash

yum install -y curl tar make gcc wget

cd /usr/local/src && \
wget  http://download.redis.io/releases/redis-2.8.13.tar.gz  && \
tar xf redis-2.8.13.tar.gz && \
cd redis-2.8.13 && \
make && \
make install

cat > /etc/supervisord.d/redis.conf << EOF
[program:redis]
command=/usr/local/bin/redis-server
autorestart=true
EOF
