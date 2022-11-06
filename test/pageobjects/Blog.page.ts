import { ChainablePromiseElement } from 'webdriverio';

class BlogPage {
    get footerBlogBtn(){
        return $("a[href='/resources']>span")
    }

    get verifyAPIBtn(){
        return $("//button[text()='Verify API']")
    }

    get guidesTutorialsBtn(){
        return $("//button[text()='Guides & Tutorials']")
    }

    async clickFooterBlogBtn(){  
        await this.footerBlogBtn.scrollIntoView();
        await this.footerBlogBtn.click();
    }

    async setBlogFilterhByProductAndContent(){
        await this.verifyAPIBtn.waitForDisplayed({ timeout: 10000 });
        await this.verifyAPIBtn.click();
        await this.guidesTutorialsBtn.click();
    }
}
export default new BlogPage();
