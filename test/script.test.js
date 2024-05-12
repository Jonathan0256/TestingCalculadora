const puppeteer = require('puppeteer');

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false, 
    slowMo: 40, 
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  
  await page.goto('http://127.0.0.1:5500/edp-calculadora/index.html');
  await page.click('#fourButton');
  await page.click('#plusButton');
  await page.click('#threeButton');
  await page.click('#equalButton');

  const finalText = await page.$eval('#display_val', el => el.value);
  expect(finalText).toBe('7');
  await browser.close();
}, 30000);