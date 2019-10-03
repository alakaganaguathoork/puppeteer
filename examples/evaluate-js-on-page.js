const puppeteer = require('puppeteer-core');

run().then(() => console.log('Done')).catch(error => console.log(error));

async function run() {
    const browser = await puppeteer.launch({
        executablePath  : '/usr/bin/chromium-browser',
        headless        : false
    });
    const page = await browser.newPage();

    await page.goto('https://google.com');

    // Type "JavaScript" into the search bar
    await page.evaluate( () => {
        document.querySelector('input[name="q"]').value = 'JavaScript';
    });

    // Click on the "Google Search" button and wait for the page to load
    const waitForLoad = new Promise(resolve => page.on('load', () => resolve()));
    await page.evaluate( () => {
        document.querySelector('input[name="btnK"]').click();
    });

    await waitForLoad;

    // Get all the search result URLs
    const links = await page.evaluate(function getUrls() {
        return Array.from(document.querySelectorAll('a cite').values()).map(el => el.innerHTML);
    });
    console.log(links);

    await new Promise(resolve => setTimeout(resolve, 5000));

    await browser.close();
}