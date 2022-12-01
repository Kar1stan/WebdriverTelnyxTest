import { ChainablePromiseElement } from 'webdriverio';

class SupportCenterPage {
    get footerSupportCenterBtn(){
        return $("//span[text()='Support Center']")
    }

    get headlingReferenceMaterial(){
        return $("//h2[text()='Reference Material']")
    }

    get headlingConfigurationGuides(){
        return $("//h2[text()='Configuration Guides']")
    }

    get headlingMessagingArticlesAndGuides(){
        return $("//h2[text()='Messaging Articles and Guides']")
    }

    get headlingVoiceAndFax(){
        return $("//h2[text()='Voice and Fax']")
    }

    get headlingPortingArticlesAndGuides(){
        return $("//h2[text()='Porting Articles and Guides']")
    }

    get headlingBillingAndPricing(){
        return $("//h2[text()='Billing & Pricing']")
    }

    get headlingProgrammableWireless(){
        return $("//h2[text()='Programmable Wireless']")
    }

    get headlingToursAndVideos(){
        return $("//h2[text()='Tours and Videos']")
    }

    get spanAccessibleCanadaAct(){
        return $("//span[text()='Accessible Canada Act (ACA): Feedback Process Description']")
    }

    async clickFooterSupportCenterBtn(){
        await this.footerSupportCenterBtn.scrollIntoView();
        await this.footerSupportCenterBtn.click();
        await browser.switchWindow("Telnyx Support");
    }

    async clickAccessibleCanadaActInReferenceMaterial(){
        await this.headlingReferenceMaterial.scrollIntoView();
        await this.headlingReferenceMaterial.click();
        await this.spanAccessibleCanadaAct.click();
    }

    async clickMessagingArticlesAndGuides(){
        await this.headlingMessagingArticlesAndGuides.click();
    }

    async clickVoiceAndFax(){
        await this.headlingVoiceAndFax.click();
    }

    async clickPortingArticlesAndGuides(){
        await this.headlingPortingArticlesAndGuides.click();
    }
    
    async clickBillingAndPrising(){
        await this.headlingBillingAndPricing.scrollIntoView();
        await this.headlingBillingAndPricing.click();
    }

    async clickProgrammableWireless(){
        await this.headlingProgrammableWireless.scrollIntoView();
        await this.headlingProgrammableWireless.click();
    }

    async clickToursAndVideos(){
        await this.headlingToursAndVideos.scrollIntoView();
        await this.headlingToursAndVideos.click();
    }

    async clickConfigurationGuides(){
        await this.headlingConfigurationGuides.click();
    }
}
export default new SupportCenterPage();
