import SignupPage from  '../pageobjects/SignUp.page';
import MainPage from  '../pageobjects/Main.page';

const invalidPasswordWithOneSymbol="#";

describe('SignUp page test', () => {
    beforeEach(() => {
        MainPage.visitUrl();
    })

    it('Should signup with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillEmail(SignupPage.email);
        await SignupPage.fillFullname(SignupPage.fullname);
        await SignupPage.fillPassword(SignupPage.password);
        await SignupPage.clickTermsConditionsCheckbox();
        await SignupPage.clickCreateAccountBtn();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with invalid password with one symbol', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.fillEmail(SignupPage.email);
        await SignupPage.fillFullname(SignupPage.fullname);
        await SignupPage.fillPassword(invalidPasswordWithOneSymbol);
        await SignupPage.clickTermsConditionsCheckbox();
        await SignupPage.clickCreateAccountBtn();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should signup with empty credentials', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.signUpWithEmptyCredentials();
        await SignupPage.clickTermsConditionsCheckbox();
        await SignupPage.clickCreateAccountBtn();
        await expect(browser).toHaveUrl("https://telnyx.com/sign-up");
    });

    it('Should click Log In button at Sign Up page', async () => {
        await SignupPage.clickFooterSignUpBtn();
        await SignupPage.clickLogInLinkBtn();
        await expect(browser).toHaveUrlContaining("#/login/sign-in");
    });
});
