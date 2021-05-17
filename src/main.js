const { getBrowser, closeBrowser, takeScreenshot } = require(`../lib/puppets`);
const testPageExistence = require('../tests/existentPage');
const mobileTestPage = require('../tests/mobilePage');

async function test() {
  const browser = await getBrowser();
  const urlToTest = 'https://www.timeanddate.com/worldclock/spain/zaragoza';
  const pagePuppet = await browser.newPage();
  await testPageExistence(pagePuppet, urlToTest);
  await takeScreenshot(pagePuppet);
  await mobileTestPage(pagePuppet, urlToTest);
  await takeScreenshot(pagePuppet);
  await closeBrowser(browser);
}
test();
