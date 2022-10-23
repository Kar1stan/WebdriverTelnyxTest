FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

RUN npm install

CMD Url=PROD_URL npm run testchrome 