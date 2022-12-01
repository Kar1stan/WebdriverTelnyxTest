import DataPrivacyPage from  '../pageobjects/DataPrivacy.page';
import MainPage from  '../pageobjects/Main.page';


describe('Footer Data & Privacy page', () => {
    beforeEach(() => {
        MainPage.visitUrl();
    })

    it('Should scroll to Overview button and click page button', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await DataPrivacyPage.clickFooterDataPrivacyBtn();
        await DataPrivacyPage.clickPrivacyLinkInOverviewBtn();
    });
});