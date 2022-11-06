import DeveloperDocsPage from  '../pageobjects/DeveloperDocs.page';
import MainPage from '../pageobjects/Main.page';

beforeEach(() => {
    MainPage.goto();
})

describe('Footer DeveloperDocs page', () => {
    it.skip('Should click API Reference button on the header and Messaging button inside of it', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await DeveloperDocsPage.clickFooterDeveloperDocsBtn();
        await DeveloperDocsPage.clickSDKSetupLinkInDevelopmentBtn();
        await expect(DeveloperDocsPage.nodeBtn).toHaveAttributeContaining('aria-selected','true');
    });

    it('Should click APIv1 and View details buttons', async () => {
        await DeveloperDocsPage.clickFooterDeveloperDocsBtn();
        await DeveloperDocsPage.clickTelnyxStatusLinkInAPIv1Documentation();
        await expect(browser).toHaveUrl("https://status.telnyx.com/");
    });
});
