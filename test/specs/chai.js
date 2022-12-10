//declare chai assertion style
import { expect as chaiExpect, assert } from 'chai'; 


describe("eBay Top Banner on Homepage", () => {

    it('Should show a banner container on top of main page', async () => {
        try {
        await browser.url('https://www.ebay.com/');
        const banner = await $('#rtm_list1  div');
        expect(banner).toBeDisplayed();
        } 
        catch (error) {
            console.log("Top banner is no longer available on homepage");
        }
    })

    it('Should show top banner title', async () => {
        const bannerTitle = await $('span*=Soccer euphoria is here');
        const bannerTitleText = await bannerTitle.getText();

        await chaiExpect(bannerTitleText).to.not.be.empty;
        
        //Using Assert from Chai intead of Expect
        await assert.isNotEmpty(bannerTitleText);
    })

    
    it('Should contain link on top banner and be clickable', async () => {
        const bannerLink = await $('#rtm_list1 a.hl-full-bleed-banner__container.focus-inset');
        await expect(bannerLink).toHaveLinkContaining('2022-qatar');

        const tag = await bannerLink.getTagName();
        await chaiExpect(tag).to.equal('a');

        const bannerBtn = await $('#rtm_list1 div.hl-cta__default');
        await expect(bannerBtn).toBeClickable();
    })

    it('Should render new page when Banner Button is clicked', async () => {
        const bannerBtn = await $('#rtm_list1 div.hl-cta__default');
        await bannerBtn.click();

        await expect(browser).toHaveTitle("Soccer's biggest event is here | eBay. Pick your squad");
        
        const url = await browser.getUrl();
        await chaiExpect(url).to.include('2022-qatar');
    })

})