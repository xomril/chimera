const { openBrowser, goto, closeBrowser } = require("taiko");

describe('this is the first test suite', () =>{
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