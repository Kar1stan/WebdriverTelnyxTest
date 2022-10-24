import { ChainablePromiseElement } from 'webdriverio';

class DeveloperDocsPage {
    get footerDeveloperDocsBtn(){
        return $("a[href='https://developers.telnyx.com/docs/v2']>span")
    }

    get DevelopmentBtn(){
        return $("div[alt='developer icon']~span")
    }

    get sdkSetupBtn(){
        return $("//a[text()='SDK Setup']")
    }

    get tabpanelNode(){
        return $("#tabpanel-Node")
    }

    get apiv1Btn(){
        return $("#docs-desktop-sidebar>div>div>button")
    }

    get telnyxStatusLink(){
        return $("a[href='http://status.telnyx.com']")
    }

    async clickFooterDeveloperDocsBtn(){
        await this.footerDeveloperDocsBtn.click();
        await browser.switchWindow("Telnyx Developers");
    }

    async clickSDKSetupLinkInDevelopmentBtn(){
        await this.DevelopmentBtn.waitForDisplayed({ timeout: 5000 });
        await this.DevelopmentBtn.click();
        await this.sdkSetupBtn.click();
    }

    async clickTelnyxStatusLinkInAPIv1Documentation(){
        await this.apiv1Btn.waitForDisplayed({ timeout: 5000 });
        await this.apiv1Btn.click();
        await this.telnyxStatusLink.click();
    }
}
export default new DeveloperDocsPage();
