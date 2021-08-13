# STAGE 1 - build the react app
FROM node:14-alpine as build

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY /src /app/src

RUN yarn build

# STAGE 2 - build the final image using a nginx web server
# distribution and copy the react build files
FROM nginx:latest

COPY docker/frontend/static.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build/static /var/www/html/static
COPY --from=build /app/build /var/www/html/frontend

EXPOSE 80
