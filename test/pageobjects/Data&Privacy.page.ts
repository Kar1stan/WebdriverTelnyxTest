import { ChainablePromiseElement } from 'webdriverio';

class DataPrivacyPage {
    get footerDataPrivacyBtn(){
        return $("//span[text()='Data & Privacy']")
    }

    get overviewBtn(){
        return $("//button[text()='Overview']")
    }

    get pageBtn(){
        return $("//a[text()='page']")
    }

    async clickFooterDataPrivacyBtn(){
        await this.footerDataPrivacyBtn.scrollIntoView();
        await this.footerDataPrivacyBtn.click();
    }

    async clickPrivacyLinkInOverviewBtn(){
        await this.overviewBtn.scrollIntoView();
        await this.pageBtn.click();
    }
}
export default new DataPrivacyPage();