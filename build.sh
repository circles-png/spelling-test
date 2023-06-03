#!/bin/bash
cp -r ./frontend/dist ./frontend/server/dist
docker compose build
