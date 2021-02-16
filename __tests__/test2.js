const { openBrowser, goto, closeBrowser } = require("taiko");

describe('this is the seconed test suite', () =>{
    beforeAll(async () => {
        await openBrowser({ headless: false});
    })

    describe('search google', () => {
        test('Goto google.com', async () => {
            await goto('https://google.com');
        })
    })

    afterAll(async () => {
        await closeBrowser();
    })
})