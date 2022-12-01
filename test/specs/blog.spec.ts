import BlogPage from  '../pageobjects/Blog.page';
import MainPage from  '../pageobjects/Main.page';

describe('Footer Blog page', () => {
    beforeEach(() => {
        MainPage.visitUrl();
    })

    it('Should check Verify API and Guides & Tutorials buttons', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await BlogPage.clickFooterBlogBtn();
        await BlogPage.clickVerifyAPIBtn();
        await BlogPage.clickGuidesTutorialsBtn();
        await expect (BlogPage.verifyAPIBtn).toHaveAttributeContaining('aria-checked','true');
        await expect (BlogPage.guidesTutorialsBtn).toHaveAttributeContaining('aria-checked','true');
    });
});