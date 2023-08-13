const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Increase the navigation timeout to 60 seconds
    await page.setDefaultNavigationTimeout(60000); // 60 seconds
    
    try {
        await page.goto('https://github.com/Ghosteken');

        // Wait for a specific element to ensure the page is fully loaded
        await page.waitForSelector('YOUR_SELECTOR_HERE', { timeout: 60000 }); // Replace with an actual selector

        console.log('Page loaded successfully.');
    } catch (error) {
        console.error('Error navigating to the page:', error);
    }
    
    await browser.close();
})();
