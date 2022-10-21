import DeveloperDocsPage from  '../pageobjects/developerdocs.page';
import MainPage from  '../pageobjects/main.page';

describe.skip('Footer DeveloperDocs page', () => {
    it('Should clicks Development and SDK Setup buttons', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await DeveloperDocsPage.clickFooterDeveloperDocsBtn();
        await DeveloperDocsPage.clickSDKSetupLinkInDevelopmentBtn();
        await expect(DeveloperDocsPage.tabpanelNode).toBeDisplayed();
    });

    it('Should clicks APIv1 and View details buttons', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await DeveloperDocsPage.clickFooterDeveloperDocsBtn();
        await DeveloperDocsPage.clickTelnyxStatusLinkInAPIv1Documentation();
        await expect(browser).toHaveUrl("https://status.telnyx.com/");
    });
});