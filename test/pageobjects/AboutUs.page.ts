class AboutUsPage {
    get footerAboutUsBtn(){
        return $("//span[text()='About Us']")
    }

    get channelsCallsPerSecond(){
        return $("//a[text()='Channels & calls per second']")
    }

    get elasticSIPTrunkingPricingBtn(){
        return $("//span[text()='Elastic SIP Trunking Pricing']")
    }

    async clickFooterAboutUsBtn(){
        await this.footerAboutUsBtn.scrollIntoView();
        await this.footerAboutUsBtn.click();
    }

    async checkChannelsCallsPerSecond(){
        await this.elasticSIPTrunkingPricingBtn.scrollIntoView();
        await this.elasticSIPTrunkingPricingBtn.click();
        await this.channelsCallsPerSecond.click()
    }

    
}
export default new AboutUsPage();
