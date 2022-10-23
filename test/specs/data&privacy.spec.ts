import DataPrivacyPage from  '../pageobjects/data&privacy.page';
import MainPage from  '../pageobjects/main.page';

describe('Footer Data & Privacy page', () => {
    it('Should scroll to Overview button and click page button', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await DataPrivacyPage.clickFooterDataPrivacyBtn();
        await DataPrivacyPage.clickPrivacyLinkInOverviewBtn();
    });
});