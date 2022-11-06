import SupportCenterPage from  '../pageobjects/SupportCenter.page';
import MainPage from  '../pageobjects/Main.page';

beforeEach(() => {
    MainPage.goto();
})

describe('Footer Support Center page', () => {
    it('Should clicks Accessible Canada Act (ACA) in the Refence Material header', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await SupportCenterPage.clickFooterSupportCenterBtn();
        await SupportCenterPage.clickAccessibleCanadaActInReferenceMaterial();
        await expect(browser).toHaveUrlContaining("/6228388-accessible-canada-act-aca-feedback-process-description");
    });
});