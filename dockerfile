FROM node:lts-alpine as build-stage
WORKDIR /app
ADD . /app
RUN yarn install \
  && yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
