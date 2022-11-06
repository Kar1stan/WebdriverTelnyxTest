import { ChainablePromiseElement } from 'webdriverio';

class MainPage {
    get cookiesAcceptBtn(){
        return $("//button[text()='Accept and close']")
    }

    async clickAcceptCookiesBtn(){
        await this.cookiesAcceptBtn.click()
    }

    async goto(){
        await browser.url('https://telnyx.com/');
    }
}
export default new MainPage();