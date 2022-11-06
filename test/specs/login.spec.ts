import LoginPage from  '../pageobjects/LogIn.page';
import MainPage from  '../pageobjects/Main.page';

const email="foloxov@gmail.com";

beforeEach(() => {
    MainPage.goto();
})

describe('LogIn page test', () => {
    it('Should login with valid credentials', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail(email);
        await LoginPage.fillLogInWithValidPassword("ZpPQ_q!!u#Lz6PZ");
        await expect(LoginPage.logInError).toBeDisplayed();
    });

    it('Should login with invalid password which consists of 4 symbols', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithValidEmail(email);
        await LoginPage.fillLogInWithInvalidPassword("!!!!");
        await expect(LoginPage.logInError).toBeDisplayed();
    });

    it('Should login with empty credentials', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInWithEmptyCredentials();
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => { 
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInCompanyEmail("derbeshcov@gmail.com");
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });

    it('Should LogIn with false company email in Single Sign-On', async () => {
        await LoginPage.clickFooterLogInBtn();
        await LoginPage.fillLogInBusinessName("5555");
        await expect(browser).toHaveUrlContaining("/login/sign-in");
    });
});


