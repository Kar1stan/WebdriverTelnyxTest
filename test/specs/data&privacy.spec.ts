import DataPrivacyPage from  '../pageobjects/Data&Privacy.page';
import MainPage from  '../pageobjects/Main.page';

beforeEach(() => {
    MainPage.goto();
})

describe('Footer Data & Privacy page', () => {
    it('Should scroll to Overview button and click page button', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await DataPrivacyPage.clickFooterDataPrivacyBtn();
        await DataPrivacyPage.clickPrivacyLinkInOverviewBtn();
    });
});