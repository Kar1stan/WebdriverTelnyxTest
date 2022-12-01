import { ChainablePromiseElement } from 'webdriverio';
import 'dotenv/config'

class MainPage {
    get cookiesAcceptBtn(){
        return $("//button[text()='Accept and close']")
    }

    async clickAcceptCookiesBtn(){
        await this.cookiesAcceptBtn.click()
    }

    async visitUrl(){
        await browser.url(process.env.TELNYX_URL!);
    }
}
export default new MainPage();