#!/bin/sh

# openssl genrsa -des3 -out ./security/server/ca.key 2048
# openssl req -new  -sha256 -days 1024 -nodes -x509 -key ./security/server/ca.key -keyout ./security/server/key.pem -out ./security/server/cert.pem

openssl req -newkey rsa:2048 -new -days 365 -nodes -x509 -keyout ./security/server/key.pem -out ./security/server/cert.pem