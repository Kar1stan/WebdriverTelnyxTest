import StoragePage from  '../pageobjects/Storage.page';
import MainPage from  '../pageobjects/Main.page';
import 'dotenv/config'

describe('Home page Telnyx email form', () => {
    beforeEach(() => {
        MainPage.visitUrl();
    })

    it('Should check Telnyx home page email form', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await StoragePage.fillEmail(process.env.EMAIL!);
        await StoragePage.clickTryForFreeBtn();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up?email=foloxov@gmail.com");
    });
});
