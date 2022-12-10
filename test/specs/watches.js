import watchesPage from '../pages/watches.page';
import { expect as chaiExpect } from 'chai'; 
import { waitAndClick } from '../utilities/helper';
import resources from '../resources';


describe("eBay Watches, Parts & Accessories", () => {
    before (async () => {
        await watchesPage.open();
        await watchesPage.$$fashionLink.moveTo();
        await waitAndClick(watchesPage.$watchesLink,  5000);
    })

    it('Should verify the watches category list ', async () => {
        const watchesCategoryList = await watchesPage.getWatchesCategoryListText();
        
        await chaiExpect(watchesCategoryList).to.deep.equal(resources.watchesCategoryTextList);
    })

})
