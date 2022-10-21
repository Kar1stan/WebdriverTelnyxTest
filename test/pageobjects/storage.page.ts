import { ChainablePromiseElement } from 'webdriverio';

class StoragePage {
    get SMSBtn(){
        return $("//button[text()='SMS']")
    }

    get labelNo(){
        return $("//label[text()='No']")
    }

    get tollFreeNumbersLabel(){
        return $("//label[text()='Toll-free numbers']")
    }

    get speakToOurExpertsBtn(){
        return $("//a[text()='Speak to our experts']")
    }

    get TryForFreeBtn(){
        return $("//span[text()='Try for free']")
    }

    async clickTryForFreeBtn(){
        await this.TryForFreeBtn.click();
    }
}
export default new StoragePage();