const { given, when, then } = require(`../lib/bit.tester`);

module.exports = async function (pagePuppet) {
  await given(`the page of my country and city time `, async () => {
    const inputPageUrl = `https://www.timeanddate.com/worldclock/spain/zaragoza`;
    const inputUserAgent =
      'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36';
    await when('we visit on desktop', async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() => {
        const breadcrumbs = document.getElementById(`bct`);
        return breadcrumbs === null;
      });
      const expected = false;
      then(`the navigation breadcrumbs are present on desktop`, actual, expected);
    });
    await pagePuppet.setUserAgent(inputUserAgent);
    await pagePuppet.setViewport({ width: 375, height: 812 });
    await when(`we visit emulating an Android`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() => {
        const breadcrumbs = document.getElementById(`bct`);
        return breadcrumbs === null;
        const style = window.getComputedStyle(nav, ``);
        return style.getPropertyValue(`visibility`);
      });
      const expected = true;
      then(`the navigation breadcrumbs don't exist`, actual, expected);
    });
  });
};
