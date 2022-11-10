import { ChainablePromiseElement } from 'webdriverio';
import 'dotenv/config'
const telnyx_url=process.env.TELNYXURL;

class MainPage {
    get cookiesAcceptBtn(){
        return $("//button[text()='Accept and close']")
    }

    async clickAcceptCookiesBtn(){
        await this.cookiesAcceptBtn.click()
    }

    async goto(){
        await browser.url(telnyx_url!);
    }
}
export default new MainPage();