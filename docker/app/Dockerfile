FROM node:18.18.0

ENV APP_ROOT /app
WORKDIR ${APP_ROOT}

RUN mkdir -p ${APP_ROOT} && \
    chown node:node ${APP_ROOT}

USER node

COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm install

COPY --chown=node:node . .
