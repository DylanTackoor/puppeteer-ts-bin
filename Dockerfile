FROM node:alpine as builder

# Installs latest Chromium (92) package.
RUN apk add --no-cache \
	chromium \
	nss \
	freetype \
	harfbuzz \
	ca-certificates \
	ttf-freefont \
	nodejs \
	yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
	PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Puppeteer v10.0.0 works with Chromium 92.
RUN yarn add puppeteer@10.0.0

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -G pptruser pptruser && mkdir -p /home/pptruser/Downloads /app && chown -R pptruser:pptruser /home/pptruser && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
USER pptruser

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY src .

RUN npm ci
RUN npm run dockerBuild

FROM centos:7
WORKDIR /usr/local
COPY --from=builder /app/build/ .
CMD ["./puppeteer-ts-bin-linux", "--help"]
