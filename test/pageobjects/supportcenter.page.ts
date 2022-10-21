import { ChainablePromiseElement } from 'webdriverio';

class SupportCenterPage {
    get footerSupportCenterBtn(){
        return $("//span[text()='Support Center']")
    }

    get headerReferenceMaterial(){
        return $("//h2[text()='Reference Material']")
    }

    get spanAccessibleCanadaAct(){
        return $("//span[text()='Accessible Canada Act (ACA): Feedback Process Description']")
    }

    async clickFooterSupportCenterBtn(){
        await this.footerSupportCenterBtn.click();
        await browser.switchWindow("Telnyx Support");
    }

    async clickAccessibleCanadaActInReferenceMaterial(){
        await this.headerReferenceMaterial.click();
        await this.spanAccessibleCanadaAct.click();
    }
}
export default new SupportCenterPage();