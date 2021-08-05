---
slug: backend-dockerfile-setup
title: Backend Dockerfile Setup
description: How to setup a dockerfile to containerize yout appliaction for deployment to various VPS of your choice and how to install it on your VPS.
date: 3-August-2021
---

How to setup a dockerfile to containerize yout appliaction for deployment to various VPS of your choice and how to install it on your VPS. You can use the following dockerfile for your projects that are specially using `typescript` and `yarn`

```dockerfile


FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
COPY .env.production .env

RUN yarn build


ENV NODE_ENV production

EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node


```

Then you can use the following commands to push it from your system and pull it from your VPS

```bash

docker build -t <tagname>
docker push <tagname>

## on your vps
docker pull <username>:<tagname>

```
