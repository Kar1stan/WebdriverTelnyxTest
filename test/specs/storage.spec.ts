import StoragePage from  '../pageobjects/storage.page';
import MainPage from  '../pageobjects/main.page';

describe.skip('Home page Telnyx cloud storage', () => {
    it('Should open products storage page', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await StoragePage.clickTryForFreeBtn();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });
});