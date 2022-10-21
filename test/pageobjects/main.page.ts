import { ChainablePromiseElement } from 'webdriverio';

class MainPage {
    get cookiesAcceptBtn(){
        return $("//button[text()='Accept and close']")
    }
    async clickAcceptCookiesBtn(){
        await this.cookiesAcceptBtn.click()
     }
}
export default new MainPage();