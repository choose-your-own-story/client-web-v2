FROM node:20-alpine3.18 as build-stage
WORKDIR /app

ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}

ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

ARG REACT_APP_PUBLIC_PATH
ENV REACT_APP_PUBLIC_PATH=${REACT_APP_PUBLIC_PATH}

ARG REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID}

COPY . .

RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install
RUN yarn build --mode production

FROM nginx as production-stage
RUN mkdir /static
COPY --from=build-stage /app/dist /static/apps/story-maker/client
COPY --from=build-stage /app/deploy/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
