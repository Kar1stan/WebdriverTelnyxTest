import SupportCenterPage from  '../pageobjects/supportcenter.page';
import MainPage from  '../pageobjects/main.page';

describe('Footer Support Center page', () => {
    it('Should clicks Accessible Canada Act (ACA) in the Refence Material header', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await SupportCenterPage.clickFooterSupportCenterBtn();
        await SupportCenterPage.clickAccessibleCanadaActInReferenceMaterial();
        await expect(browser).toHaveUrlContaining("/6228388-accessible-canada-act-aca-feedback-process-description");
    });
});