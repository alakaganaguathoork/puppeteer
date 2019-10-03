const fs = require('fs');
const puppeteer = require('puppeteer-core');

run().then(() => console.log('Done')).catch(error => console.error());

async function run() {
    const browser = await puppeteer.launch({
        executablePath  : '/usr/bin/chromium-browser',
        headless        : false
    });

    const page = await browser.newPage();

    // Full list of devices here:
    // https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
    await page.emulate(puppeteer.devices['iPhone X']);
    
    await page.goto('https://google.com');

    const image = await page.screenshot();
    fs.writeFileSync('./screenshot.png', image);

    await browser.close();


}