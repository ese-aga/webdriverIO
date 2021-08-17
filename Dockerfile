#base Image from https://webdriver.io/docs/docker/
FROM ianwalter/puppeteer:latest

# Install OpenJDK-11
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    apt-get clean;

# Upgrade chrome driver
RUN apt-get --only-upgrade install -y google-chrome-stable

WORKDIR /app
ADD . /app

RUN npm install
RUN npm install allure-commandline -g

EXPOSE 5050

CMD npx wdio; allure generate allure-results --clean && allure open --port 5050