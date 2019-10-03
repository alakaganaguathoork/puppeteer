const puppeteer = require('puppeteer-core');

(
    async () => {
        // Create a new browser. By default, the browser is headless,
        // which means it runs in the background and doesn't appear on
        // the screen. Setting `headless: false` opens up a browser
        // window so you can watch what happens.
        const browser = await puppeteer.launch({
            executablePath  : '/usr/bin/chromium-browser',
            headless        : false
        });
        //console.info(browser);

        // Open a new page and navigate to google.com
        const page = await browser.newPage();
        await page.goto('https://google.com');
        
        // Wait for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Close the browser and exit the script
        await browser.close(); 
    }
)();