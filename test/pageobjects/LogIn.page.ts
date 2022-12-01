import { ChainablePromiseElement } from 'webdriverio';


class LoginPage {
    get footerLogInBtn(){
        return $("//span[text()='Log In']")
    }

    get emailInput(){
        return $("form>div>div>label>span~div>div>input[name='email']")
    }

    get passwordInput(){
        return $("input[name='password']")
    }

    get submitBtn(){
        return $("//button[text()='Log in']")
    }

    get logInError(){
        return $("div[type='error']")
    }
    
    get singleSignOnBtn(){
        return $("//button[text()='Single Sign-On']")
    }

    get businessNameInput(){
        return $("input[name='short_name']")
    }

    get companyEmailInput(){
        return $("input[placeholder='e.g. jane@acme.com']")
    }

    get continueBtn(){
        return $("//button[text()='Continue']")
    }

    get companyNameBtn(){
        return $("//button[text()='company name']")
    }

    get logInErrorRequestNotFound(){
        return $("div[type='error']")
    }
     
    async clickFooterLogInBtn(){
       await this.footerLogInBtn.scrollIntoView();
       await this.footerLogInBtn.click();
       await browser.switchWindow("Login / Telnyx Customer Portal");
    }

    async fillEmail(email:string){
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
    }

    async fillPassword(password:string){
        await this.passwordInput.setValue(password);
    }
    
    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

    async logInWithEmptyCredentials(){
        await this.submitBtn.waitForDisplayed({ timeout: 5000 });
        await this.submitBtn.click();
    }

    async clickSingleSignOnBtn(){
        await this.singleSignOnBtn.waitForDisplayed({ timeout: 8000 });
        await this.singleSignOnBtn.click();
    }

    async fillCompanyEmail(email:string){
        await this.companyEmailInput.setValue(email);
    }

    async  clicCompanyNameBtn(){
        await this.companyNameBtn.click();
    }

    async fillBusinessName(name:string){
        await this.businessNameInput.setValue(name);
    }

    async clickContinueBtn(){
        await this.continueBtn.click();
    }
}
export default new LoginPage();

