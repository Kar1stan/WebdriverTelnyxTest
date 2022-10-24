import LoginPage from  '../pageobjects/login.page';
import MainPage from  '../pageobjects/main.page';

describe('Footer LogIn page', () => {
    it('Should login with valid credentials', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail("foloxov@gmail.com");
        await LoginPage.fillLogInWithValidPassword("ZpPQ_q!!u#Lz6PZ");
        await expect(LoginPage.logInError).toBeDisplayed();
    });

    it('Should login with invalid password', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail("foloxov@gmail.com");
        await LoginPage.fillLogInWithInvalidPassword("!!!!");
        await expect(LoginPage.logInError).toBeDisplayed();
    });

    it('Should login with empty credentials', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithEmptyCredentials();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => { 
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInCompanyEmail("derbeshcov@gmail.com");
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => {
        await browser.url('https://telnyx.com/');
        //await MainPage.clickAcceptCookiesBtn(); 
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInBusinessName("5555");
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});


