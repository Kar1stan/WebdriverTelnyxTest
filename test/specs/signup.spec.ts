import SignupPage from  '../pageobjects/signup.page';
import MainPage from  '../pageobjects/main.page';

describe('Footer SignUp page', () => {
    it('Should signup with valid credentials', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail("byter24@gmail.com");
        await SignupPage.fillSignUpWithValidFullname("LedminMer");
        await SignupPage.fillSignUpWithInvalidPassword("%X*gg.8f2wh*56k");
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with invalid password', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail("byter24@gmail.com");
        await SignupPage.fillSignUpWithValidFullname("LedminMer");
        await SignupPage.fillSignUpWithInvalidPassword("dfffg1QzBBBqq");
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with empty credentials', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithEmptyCredentials();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should click Log In button at Sign Up page', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.clickSignUpWithLogInLinkButton();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});