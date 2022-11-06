import StoragePage from  '../pageobjects/Storage.page';
import MainPage from  '../pageobjects/Main.page';

beforeEach(() => {
    MainPage.goto();
})

describe('Home page Telnyx email form', () => {
    it('Should open products storage page', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await StoragePage.clickTryForFreeBtn("foloxov@gmail.com");
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });
});