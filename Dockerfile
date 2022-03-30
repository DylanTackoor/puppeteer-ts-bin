# Node alpine dockerfile that copies the files from the host to the container
# installs dependencies and runs the app

FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY src .

RUN npm ci
RUN npm run build

FROM centos:7
COPY --from=builder /app/build .
CMD ["./build/puppeteer-ts-bin-linux", "--help"]
