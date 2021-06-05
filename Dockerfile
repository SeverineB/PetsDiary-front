# Dockerfile for React client

# Build react client
FROM node:12.18-alpine

# Working directory be app
WORKDIR /app

COPY ./package.json /app/package.json

RUN apk add --no-cache git

###  Installing dependencies

RUN yarn install

# copy local files to app folder
COPY . /app

EXPOSE 8080

CMD ["yarn","start"]