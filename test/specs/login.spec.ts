import LoginPage from  '../pageobjects/LogIn.page';
import MainPage from  '../pageobjects/Main.page';
import 'dotenv/config'

beforeEach(() => {
    MainPage.goto();
})

describe('LogIn page test', () => {
    it('Should login with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillEmail(process.env.EMAIL!);
        await LoginPage.fillPassword(process.env.PASSWORD!);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with invalid password which consists of 4 symbols', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillEmail(process.env.EMAIL!);
        await LoginPage.fillPassword(process.env.WITH_FOUR_SYMBOLS!);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with empty credentials', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.logInWithEmptyCredentials();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => { 
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillCompanyEmail(process.env.COMPANY_EMAIL!);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillBusinessName(process.env.BUSINESS_NAME!);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});


