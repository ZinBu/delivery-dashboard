FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY /src /app/src

CMD yarn start
