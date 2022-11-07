import SignupPage from  '../pageobjects/SignUp.page';
import MainPage from  '../pageobjects/Main.page';

const email="byter24@gmail.com";
const fullname="LedminMer";

beforeEach(() => {
    MainPage.goto();
})

describe('SignUp page test', () => {
    it('Should signup with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail(email);
        await SignupPage.fillSignUpWithValidFullname(fullname);
        await SignupPage.fillSignUpWithInvalidPassword("%X*gg.8f2wh*56k");
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with invalid password', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail(email);
        await SignupPage.fillSignUpWithValidFullname(fullname);
        await SignupPage.fillSignUpWithInvalidPassword("dfffg1QzBBBqq");
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with empty credentials', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithEmptyCredentials();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should click Log In button at Sign Up page', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.clickSignUpWithLogInLinkButton();
        await expect(browser).toHaveUrl("https://portal.telnyx.com/?_gl=1*bk99s1*_ga*MTQ4NDcxMzAzOC4xNjY3ODE2Mjg3*_ga_ZPM4K1DLND*MTY2NzgxNjI4OS4xLjEuMTY2NzgxNjM3MC4wLjAuMA..#");
    });
});
