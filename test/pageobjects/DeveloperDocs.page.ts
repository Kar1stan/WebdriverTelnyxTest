import { ChainablePromiseElement } from 'webdriverio';

class DeveloperDocsPage {
    get footerDeveloperDocsBtn(){
        return $("a[href='https://developers.telnyx.com/docs/v2']>span")
    }

    get apiReferenceBtn(){
        return $("header>div>div>div>nav>a~a")
    }

    get messagingBtn(){
        return $("//a[text()='Messaging']")
    }

    get nodeBtn(){
        return $("#tab-Node")
    }

    get apiv1Btn(){
        return $("#docs-desktop-sidebar>div>div>button")
    }

    get telnyxStatusLink(){
        return $("a[href='http://status.telnyx.com']")
    }

    async clickFooterDeveloperDocsBtn(){
        await this.footerDeveloperDocsBtn.scrollIntoView();
        await this.footerDeveloperDocsBtn.click();
        await browser.switchWindow("Telnyx Developers");
    }

    async clickSDKSetupLinkInDevelopmentBtn(){
        await this.apiReferenceBtn.click();
        await this.messagingBtn.click();
    }

    async clickTelnyxStatusLinkInAPIv1Documentation(){
        await this.apiv1Btn.click();
        await this.telnyxStatusLink.click();
    }
}
export default new DeveloperDocsPage();