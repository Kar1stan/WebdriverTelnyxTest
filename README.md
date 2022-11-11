# WebdriverTelnyxTest
Project with 20 automated test cases on the telnyx.com site which is using Webdriver IO,Allure Report.

##💻 Topics

Integrated with:

- [x] https://webdriver.io/docs/docker/
- [x] https://webdriver.io/docs/allure-reporter/
- [x] https://webdriver.io/docs/selenium-standalone-service/
- [x] https://www.npmjs.com/package/allure-commandline

## 💻 Pre-requisites

Before you use this project you need to have Docker installed in your computer.

Also delete package.lock file before you run your project.

### Git clone
This will clone the project, install NPM packages and also the Webdriver.io which is required to run the test.
```
$ git clone https://github.com/Kar1stan/WebdriverTelnyxTest.git
$ cd WebdriverTelnyxTest
$ npm install
```

## 🚀 Run the project: 
If you want run the project in the production mode open the terminal and run: 
```
Url=PROD_URL npm run testchrome 
```
If you want run the project in the development mode open the terminal and run: 
```
Url=DEV_URL npm run testchrome 
```
Switch testchrome to testfirefox if you want to run project in the firefox browser same modes could have been applied.
```
Example:Url=PROD_URL npm run testfirefox.
```
To run docker containers open the terminal and run:
```
docker-compose -f "selenium-4-grid.yml" up -d --build
```
To stop them open the terminal and run:
```
docker-compose -f "selenium-4-grid.yml" down
```
## Credits
For further help or additional errors [here](https://webdriver.io/docs/gettingstarted)
