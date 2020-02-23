const puppeteer = require("puppeteer");

const login = async () => {
  console.log("login service");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dealer.sgcarmart.com/login");
  console.log('process.env.LOGIN_ACCOUNT', process.env.LOGIN_ACCOUNT);
  console.log('process.env.LOGIN_PASSWORD', process.env.LOGIN_PASSWORD);
  await page.type('#username', process.env.LOGIN_ACCOUNT);
  await page.type('#password', process.env.LOGIN_PASSWORD);
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await page.screenshot({path: 'loggedin.png'});
  await browser.close();
  console.log("login service end");
};

module.exports = {
  login
};
