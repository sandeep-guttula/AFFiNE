FROM node:22-bullseye AS dev

RUN apt-get update && apt-get install -y \
    git \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080

ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=8192"

CMD ["yarn", "affine", "dev", "--package", "@affine/web"]