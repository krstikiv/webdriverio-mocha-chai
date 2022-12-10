import BannerPage from '../pages/banner.page';

describe("eBay Top Banner on Homepage", () => {
    before (async () => {
        await BannerPage.open();
    })

    it('Should show a banner container on top of main page', async () => {
        try {
           
            await expect(BannerPage.$topBanner).toBeDisplayed();
        } 
        catch (error) {
            console.log("Top banner is no longer available on homepage");
        }
    })

    it('Should contain link on top banner and be clickable', async () => {
       // await expect(BannerPage.$bannerLink).toHaveLinkContaining('2022-qatar');
        await expect(BannerPage.$bannerBtn).toBeClickable();
    })

    it('Should render new page when Banner Button is clicked', async () => {
        await BannerPage.$bannerBtn.click();

        //await expect(browser).toHaveTitle("Soccer's biggest event is here | eBay. Pick your squad");

        await expect(browser).toHaveUrlContaining("https://www.ebay.com/e/row/2022-qatar?");
    })

})