import { ChainablePromiseElement } from 'webdriverio';

class AboutUsPage {
    get footerAboutUsBtn(){
        return $("//span[text()='About Us']")
    }

    get linkGoogleMapsAmsterdam(){
        return $("a[href='https://www.google.com/maps/place/Keizersgracht+221,+1016+DV+Amsterdam,+Netherlands/@52.3728035,4.8832875,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609c487250cfd:0x5a97225b97b7a18a!8m2!3d52.3728035!4d4.8854762']")
    }

    get linkGoogleMapsWarsaw(){
        return $("a[href='https://www.google.com/maps/place/Krucza+50,+00-024+Warszawa,+Poland/@52.2315259,21.0144063,17z/data=!3m1!4b1!4m5!3m4!1s0x471eccf40f6d0cd1:0x6c455009318c5e95!8m2!3d52.2315259!4d21.016595?shorturl=1']")
    }

    get linkGoogleMapsDenver(){
        return $("a[href='https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking/@39.7526867,-105.0043597,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78c3e73790f1:0xe7febee689f48aa4!8m2!3d39.7524434!4d-105.0024793']")
    }

    get linkGoogleMapsChicago(){
        return $("a[href='https://www.google.com/maps/place/311+W+Superior+St+%23504,+Chicago,+IL+60654/@41.8953212,-87.638761,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34acd793dc7:0xe2c3ef0e2979e71d!8m2!3d41.8953172!4d-87.6365723']")
    }
    
    get linkGoogleMapsDublin(){
        return $("a[href='https://www.google.com/maps/place/Telnyx+Ireland+Ltd/@53.3413247,-6.2411204,17z/data=!4m5!3m4!1s0x48670e91bb86901f:0x1f01514c03e28096!8m2!3d53.3413247!4d-6.2389317?hl=en']")
    }

    async clickFooterAboutUsBtn(){
        await this.footerAboutUsBtn.scrollIntoView();
        await this.footerAboutUsBtn.click();
    }

    async locateAmsterdam(){
        await this.linkGoogleMapsAmsterdam.scrollIntoView();
        await this.linkGoogleMapsAmsterdam.waitForDisplayed({ timeout: 5000 });
        await this.linkGoogleMapsAmsterdam.click();
    }

    async locateWarsaw(){
        await this.linkGoogleMapsWarsaw.scrollIntoView();
        await this.linkGoogleMapsAmsterdam.waitForDisplayed({ timeout: 5000 });
        await this.linkGoogleMapsWarsaw.click();
    }

    async locateDenver(){
        await this.linkGoogleMapsDenver.scrollIntoView();
        await this.linkGoogleMapsAmsterdam.waitForDisplayed({ timeout: 5000 });
        await this.linkGoogleMapsDenver.click();
    }

    async locateChicago(){
        await this.linkGoogleMapsChicago.scrollIntoView();
        await this.linkGoogleMapsAmsterdam.waitForDisplayed({ timeout: 5000 });
        await this.linkGoogleMapsChicago.click();
    }

    async locateDublin(){
        await this.linkGoogleMapsDublin.scrollIntoView();
        await this.linkGoogleMapsAmsterdam.waitForDisplayed({ timeout: 5000 });
        await this.linkGoogleMapsDublin.click();
    }
}
export default new AboutUsPage();
