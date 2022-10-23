import BlogPage from  '../pageobjects/blog.page';
import MainPage from  '../pageobjects/main.page';

describe('Footer Blog page', () => {
    it('Should set filters by product and content', async () => {
        await browser.url('https://telnyx.com/');
        await MainPage.clickAcceptCookiesBtn();
        await BlogPage.clickFooterBlogBtn();
        await BlogPage.setBlogFilterhByProductAndContent();
        await expect (BlogPage.verifyAPIBtn).toHaveAttributeContaining('aria-checked','true');
        await expect (BlogPage.guidesTutorialsBtn).toHaveAttributeContaining('aria-checked','true');
    });
});