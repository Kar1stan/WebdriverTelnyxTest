import LoginPage from  '../pageobjects/LogIn.page';
import MainPage from  '../pageobjects/Main.page';
import 'dotenv/config'

describe('LogIn page test', () => {
    beforeEach(() => {
        MainPage.visitUrl();
    })

    it('Should login with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillEmail(process.env.EMAIL!);
        await LoginPage.fillPassword(process.env.PASSWORD!);
        await LoginPage.clickSubmitBtn();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with invalid password which consists of 4 symbols', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillEmail(process.env.EMAIL!);
        await LoginPage.fillPassword(process.env.WRONG_PASSWORD_WITH_FOUR_SYMBOLS!);
        await LoginPage.clickSubmitBtn();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with empty credentials', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.logInWithEmptyCredentials();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email without @ symbol in Single Sign-On', async () => { 
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.clickSingleSignOnBtn();
        await LoginPage.fillCompanyEmail(process.env.COMPANY_EMAIL_WITHOUT_AT_SYMBOL!);
        await LoginPage.clickContinueBtn();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.clickSingleSignOnBtn();
        await LoginPage.clicCompanyNameBtn();
        await LoginPage.fillBusinessName(process.env.BUSINESS_NAME_WITH_FOUR_NUMBERS!);
        await LoginPage.clickContinueBtn();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});


