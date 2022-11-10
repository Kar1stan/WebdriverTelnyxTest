import LoginPage from  '../pageobjects/LogIn.page';
import MainPage from  '../pageobjects/Main.page';

import 'dotenv/config'
const email=process.env.EMAIL!;
const password=process.env.PASSWORD!;
const wrong_password=process.env.WRONGPASSWORD!;
const company_email=process.env.COMANYEMAIL!;
const business_name=process.env.BUSINESSNAME!;


beforeEach(() => {
    MainPage.goto();
})

describe('LogIn page test', () => {
    it('Should login with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail(email);
        await LoginPage.fillLogInWithValidPassword(password);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with invalid password which consists of 4 symbols', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail(email);
        await LoginPage.fillLogInWithInvalidPassword(wrong_password);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should login with empty credentials', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithEmptyCredentials();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => { 
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInCompanyEmail(company_email);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInBusinessName(business_name);
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});


