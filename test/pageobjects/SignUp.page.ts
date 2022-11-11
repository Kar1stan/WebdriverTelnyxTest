import { ChainablePromiseElement } from 'webdriverio';


class SignupPage {
    get footerSignUpBtn(){
        return $("//span[text()='Sign up']")
    }

    get emailInput(){
        return $("#email")
    }

    get fullnameInput(){
        return $("#full_name")
    }

    get passwordInput(){
        return $("#password")
    }

    get termsConditionsCheckbox(){
        return $("div[aria-labelledby='terms-label']")
        //it's not an actual checkbox because it has display:none attribute it's the parent element
    }

    get createAccountBtn(){
        return $("button[type='submit']")
    }

    get signUpLogInLinkBtn(){
        return $("//a[text()='Log in']")
    }

    get email(){
        return Math.random().toString(36).substring(2,8)+"@mail.com";
    }

    get fullname(){
        return Math.random().toString(36).substring(2,8);
    }

    get password(){
        return Math.random().toString(36).substring(2,9);
    }

    async clickFooterSignUpBtn(){
        await this.footerSignUpBtn.scrollIntoView();
        await this.footerSignUpBtn.click();
    }

    async fillEmail(email:string){
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.emailInput.setValue(email);
        await this.termsConditionsCheckbox.click();
        await this.createAccountBtn.doubleClick(); 
    }

    async fillFullname(fullname:string){
        await this.fullnameInput.setValue(fullname);
        await this.termsConditionsCheckbox.click();
        await this.createAccountBtn.doubleClick(); 
    }

    async fillPassword(password:string){
        await this.passwordInput.waitForDisplayed({ timeout: 5000 });
        await this.passwordInput.setValue(password);
        await this.termsConditionsCheckbox.click();
        await this.createAccountBtn.doubleClick(); 
    }
  
    async signUpWithEmptyCredentials(){
        await this.createAccountBtn.waitForDisplayed({ timeout: 5000 });
        await this.createAccountBtn.click();
    }
  
    async clickLogInLinkBtn(){
        await this.signUpLogInLinkBtn.waitForDisplayed({ timeout: 10000 });
        await this.signUpLogInLinkBtn.click();
    }
}

export default new SignupPage();
