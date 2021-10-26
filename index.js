const puppeteer = require('puppeteer');

(async () => {
    // Path to extension folder
    const paths = '/Users/uchenna/Downloads/Plug';
    try {
        console.log('==>Open Browser');
        const browser = await puppeteer.launch({
            // Disable headless mode
            headless: false,
            args: [
                `--disable-extensions-except=${paths}`,
                `--load-extension=${paths}`
                // `--window-size=800,600`
                ]
        });

        console.log('==>Navigate to the Extension Page');
        const page = await browser.newPage();
        await page.goto('chrome-extension://nimgpdhghlkekhpcfdenmeaepfbnlmaj/options.html');

        console.log('==>Take Screenshot');
        await page.screenshot({path: 'plug-extension.png'});

        console.log('==>Close Browser');
        await browser.close();
    }
    catch (err) {
        console.error(err);
    }
})();
