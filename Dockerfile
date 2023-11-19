FROM node:alpine3.12 as build-stage
WORKDIR /app

ARG VUE_APP_API_HOST
ENV VUE_APP_API_HOST=${VUE_APP_API_HOST}

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=${VUE_APP_BASE_URL}

ARG VUE_APP_PUBLIC_PATH
ENV VUE_APP_PUBLIC_PATH=${VUE_APP_PUBLIC_PATH}

ARG VUE_APP_GOOGLE_CLIENT_ID
ENV VUE_APP_GOOGLE_CLIENT_ID=${VUE_APP_GOOGLE_CLIENT_ID}

COPY k8s .

RUN yarn global add @vue/cli
RUN yarn install
RUN npx browserslist@latest --update-db
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build --mode production

FROM nginx as production-stage
RUN mkdir /static
COPY --from=build-stage /app/dist /static/apps/story-maker/client
COPY --from=build-stage /app/deploy/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
