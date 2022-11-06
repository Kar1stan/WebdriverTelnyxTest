import BlogPage from  '../pageobjects/Blog.page';
import MainPage from  '../pageobjects/Main.page';

beforeEach(() => {
    MainPage.goto();
})

describe('Footer Blog page', () => {
    it('Should check Verify API and Guides & Tutorials buttons', async () => {
        await MainPage.clickAcceptCookiesBtn();
        await BlogPage.clickFooterBlogBtn();
        await BlogPage.setBlogFilterhByProductAndContent();
        await expect (BlogPage.verifyAPIBtn).toHaveAttributeContaining('aria-checked','true');
        await expect (BlogPage.guidesTutorialsBtn).toHaveAttributeContaining('aria-checked','true');
    });
});