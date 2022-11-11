import StoragePage from  '../pageobjects/Storage.page';
import MainPage from  '../pageobjects/Main.page';
import 'dotenv/config'

beforeEach(() => {
    MainPage.goto();
})

describe('Home page Telnyx email form', () => {
    it('Should open products storage page', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await StoragePage.clickTryForFreeBtn(process.env.EMAIL!);
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up?email=foloxov@gmail.com");
    });
});
