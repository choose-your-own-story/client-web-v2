FROM node:20-alpine3.18 as build-stage
WORKDIR /app

ARG VITE_APP_API_HOST
ENV VITE_APP_API_HOST=${VITE_APP_API_HOST}

ARG VITE_APP_BASE_URL
ENV VITE_APP_BASE_URL=${VITE_APP_BASE_URL}

ARG VITE_APP_PUBLIC_PATH
ENV VITE_APP_PUBLIC_PATH=${VITE_APP_PUBLIC_PATH}

ARG VITE_APP_GOOGLE_CLIENT_ID
ENV VITE_APP_GOOGLE_CLIENT_ID=${VITE_APP_GOOGLE_CLIENT_ID}

COPY . .

RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install
RUN yarn build --mode production

FROM nginx as production-stage
RUN mkdir /static
COPY --from=build-stage /app/dist /static/apps/story-maker/client
COPY --from=build-stage /app/deploy/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
