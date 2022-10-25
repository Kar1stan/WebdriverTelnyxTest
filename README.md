# WebdriverTelnyxTest
Project with 20 automated test cases on the telnyx.com site which is using Webdriver IO,Allure Report.

### 💻 Topics

Integrated with:

- [x] https://webdriver.io/docs/docker/
- [x] https://webdriver.io/docs/allure-reporter/
- [x] https://webdriver.io/docs/selenium-standalone-service/
- [x] https://www.npmjs.com/package/allure-commandline

- ## 💻 Pre-requisites

Before you use this project you need to have Docker installed in your computer.

## 🚀 Install the project

Install project dependencies with: npm i

## 🚀 Run the project: 
Open the terminal and run: Url=PROD_URL npm run testchrome if you want run the project in the production mode.

run: Url=DEV_URL npm run testchrome if you want run the project in the development mode.

Switch testchrome to testfirefox if you want to run project in the firefox browser same modes could have been applied.Example:Url=PROD_URL npm run testfirefox.

To run project as Docker image Open the terminal and run:
docker build -t mytest -f Dockerfile .

docker run -it mytest
