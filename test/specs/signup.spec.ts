import SignupPage from  '../pageobjects/SignUp.page';
import MainPage from  '../pageobjects/Main.page';

//const email="byter24@gmail.com";
//const fullname="LedminMer";

beforeEach(() => {
    MainPage.goto();
})

describe('SignUp page test', () => {
    it('Should signup with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail(SignupPage.email);
        await SignupPage.fillSignUpWithValidFullname(SignupPage.fullname);
        await SignupPage.fillSignUpWithValidPassword(SignupPage.password);
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with invalid password', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillSignUpWithValidEmail(SignupPage.email);
        await SignupPage.fillSignUpWithValidFullname(SignupPage.fullname);
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
        await expect(browser).toHaveUrlContaining("#/login/sign-in");
    });
});
