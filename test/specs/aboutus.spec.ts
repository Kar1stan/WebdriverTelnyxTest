import AboutUsPage from  '../pageobjects/aboutus.page';
import MainPage from  '../pageobjects/main.page';

describe.skip('Footer AboutUs page', () => {
    it('Should click Amsterdam Google Maps link ', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.locateAmsterdam();
    });

    it('Should click Denver Google Maps link ', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.locateDenver();
    });

    it('Should click Dublin Google Maps link ', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.locateDublin();
    });

    it('Should click Chicago Google Maps link ', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.locateChicago();
    });

    it('Should click Warsaw Google Maps link ', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.locateWarsaw();
    });
});