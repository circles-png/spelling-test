#!/bin/bash

cd frontend
npm i
npm run build
rm -rf server/dist
cp -r dist server

docker compose build
