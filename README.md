# Volvo WebdriverIO Test Automation Task

Test automation task:  Volvocars has saved more than a million lives with its three-point seat belt and we are on a mission now to save a million more lives, starting with this campaign. You are the test lead for the campaign team and you need to setup a set of automated test suite using webdriverio (we believe test stack should be close to tech stack).  

Things we would like to see in the code:  
1. Setup the solution with its Dockerized image. 
2. Parallel execution of tests  
3. Reporting of the results  
4. Documentation 

# Test Description

The following tests were executed in parrel, which is an inbuilt functionality in WebDriverIO

1. Should be able to assess the Volvo Campaign Page
   a. Accesss Volvo a-million-more page
   b. Click on cookie Accept button

   Should be able to find Volvo V90 description page, this is a dynamic test
   a. Click on "Our Car" at the top of the a-million-more page 
   b. Navigate to V90 Recharge description page
   c. Assert that V90 Recharge page description page is open

2. Should be able to interaction with web element
   a. Select Campaign Heading "Ideas that change the world are often the most controversial.". 


# To run test on browser locally 

Execute from project directory:
1. Comment out the configuration below in the wdio.conf.js file under capabilities

'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--window-size=1440,735'
            ],
        }

2. Use "npx wdio" in project directory via command line/terminal to run the test

# To Run Test in Docker
execute from project directory: 
1. docker build -t volvotest -f Dockerfile . 
2. dockerun -it -p 5050:5050 volvotest

# To view Allure Report

Note: Report was generated using Allure and Spec
1. npm install allure-commandline -g

2. To view result in Docker, use localhost:5050, after docker build and run command  

Note: Port 5050 was configured for the allure report

3. To view result outside Docker, use the following commands:

   a. allure generate allure-results && allure open
   b. allure generate allure-results  --clean && allure open   # this is to generate report for subsequent tests

 
