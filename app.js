const puppeteer = require('puppeteer');

const linkToOpen = 'https://github.com/Ghosteken';
const reopenInterval = 5000; // Reopen every 5 seconds (adjust as needed)
let shouldReopen = true;

async function openAndReopenPage() {
    while (shouldReopen) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        try {
            await page.goto(linkToOpen);
            console.log(`Opened ${linkToOpen}`);
        } catch (error) {
            console.error(`Error opening ${linkToOpen}: ${error.message}`);
        } finally {
            await browser.close();
        }

        await new Promise(resolve => setTimeout(resolve, reopenInterval));
    }
}

openAndReopenPage();

// Stop reopening when the user presses Ctrl+C
process.on('SIGINT', () => {
    shouldReopen = false;
    console.log('Stopping the reopen...');
    process.exit();
});
