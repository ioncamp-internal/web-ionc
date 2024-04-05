#!/bin/bash

git pull
docker build -t nextjs-ionc .
docker rm -vf nextjs-ionc
docker run -d --name nextjs-ionc -p 8030:3000 nextjs-ionc
