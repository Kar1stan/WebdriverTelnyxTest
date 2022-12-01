import AboutUsPage from  '../pageobjects/AboutUs.page';
import MainPage from  '../pageobjects/Main.page';

beforeEach(() => {
   MainPage.visitUrl();
})
 
describe('Footer AboutUs page', () => {
     it('Should check Channels & calls per second', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await AboutUsPage.clickFooterAboutUsBtn();
        await AboutUsPage.checkChannelsCallsPerSecond();
    });
});

