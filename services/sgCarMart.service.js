const puppeteer = require("puppeteer");

const login = async () => {
  console.log("login service");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dealer.sgcarmart.com/login");
  await page.type('#username', 'test@gmail.com');
  await page.type('#password', 'samplepwd');
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
