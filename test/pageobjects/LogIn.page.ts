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

    async clickLogInSignUpLinkBtnFillPassword(password:string){
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }
 
    async clickLogInSignUpLinkBtnFillEmail(email:string){
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
        await this.submitBtn.click();
    }

    async fillLogInWithValidEmail(email:string){
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
        await this.submitBtn.click();
    }

    async fillLogInWithValidPassword(password:string){
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }

    async fillLogInWithInvalidPassword(wrong_password:string){
        await this.passwordInput.waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.setValue(wrong_password);
        await this.submitBtn.click();
    }

    async fillLogInWithEmptyCredentials(){
        await this.submitBtn.waitForDisplayed({ timeout: 5000 });
        await this.submitBtn.click();
    }

    async fillLogInCompanyEmail(falsemail:string){
        await this.singleSignOnBtn.waitForDisplayed({ timeout: 5000 });
        await this.singleSignOnBtn.click();
        await this.companyEmailInput.setValue(falsemail);
        await this.continueBtn.click();
    }

    async fillLogInBusinessName(falsename:string){
        await this.singleSignOnBtn.waitForDisplayed({ timeout: 5000 });
        await this.singleSignOnBtn.click();
        await this.companyNameBtn.click();
        await this.businessNameInput.setValue(falsename);
        await this.continueBtn.click();
    }
}

export default new LoginPage();
