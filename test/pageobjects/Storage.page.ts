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

    get emailInput(){
        return $("input[name='email']")
    }

    async clickTryForFreeBtn(email:string){
        await this.emailInput.setValue(email);
        await this.TryForFreeBtn.click();
    }
}
export default new StoragePage();