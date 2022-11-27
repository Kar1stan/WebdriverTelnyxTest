import StoragePage from  '../pageobjects/Storage.page';
import MainPage from  '../pageobjects/Main.page';
import 'dotenv/config'

beforeEach(() => {
    MainPage.visitUrl();
})

describe('Home page Telnyx email form', () => {
    it('Should check Telnyx home page email form', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await StoragePage.clickTryForFreeBtn(process.env.EMAIL!);
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up?email=foloxov@gmail.com");
    });
});
