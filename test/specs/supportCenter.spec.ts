import SupportCenterPage from  '../pageobjects/SupportCenter.page';
import MainPage from  '../pageobjects/Main.page';


describe('Footer Support Center page', () => {
     before(() => {
        MainPage.clickAcceptCookiesBtn();
     })
    
    beforeEach(() => {
        MainPage.visitUrl();
        SupportCenterPage.clickFooterSupportCenterBtn();
    })

    it('Should clicks Accessible Canada Act (ACA) in the Refence Material header', async () => {
        await SupportCenterPage.clickAccessibleCanadaActInReferenceMaterial();
        await expect(browser).toHaveUrlContaining("/6228388-accessible-canada-act-aca-feedback-process-description");
    });
    
     it('Should click Configuration Guides headling', async () => {
        await SupportCenterPage.clickConfigurationGuides();
        await expect(browser).toHaveUrlContaining("/133118-configuration-guides");
    });

    it('Should click Messaging Articles and Guides headling', async () => {
        await SupportCenterPage.clickMessagingArticlesAndGuides();
        await expect(browser).toHaveUrlContaining("/133103-messaging-articles-and-guides");
    });

    it('Should click Voice and Fax headling', async () => {
        await SupportCenterPage.clickVoiceAndFax();
        await expect(browser).toHaveUrlContaining("/133140-voice-and-fax");
    });

    it('Should click Porting Articles and Guides headling', async () => {
        await SupportCenterPage.clickPortingArticlesAndGuides();
        await expect(browser).toHaveUrlContaining("/133126-porting-articles-and-guides");
    });

    it('Should click Billing & Pricing headling', async () => {
        await SupportCenterPage.clickBillingAndPrising();
        await expect(browser).toHaveUrlContaining("/133135-billing-pricing");
    });

    it('Should click Programmable Wireless headling', async () => {
        await SupportCenterPage.clickProgrammableWireless();
        await expect(browser).toHaveUrlContaining("/1895859-programmable-wireless");
    });

    it('Should click Tours and Videos headling', async () => {
        await SupportCenterPage.clickToursAndVideos();
        await expect(browser).toHaveUrlContaining("/2029093-tours-and-videos");
    });
});
