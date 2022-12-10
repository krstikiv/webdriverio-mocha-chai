import searchPage from '../pages/search.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';

describe('Ebay product search', () =>{
    it('Should open main url and verify title', async () => {
        await searchPage.open();
        
        expect(browser).toHaveTitle(resources.homePageTitle);
    });

    it('Should search for a product and verify the search text value', async ()=> {
        await searchPage.searchInput.setValue(resources.searchValue);
        await searchPage.searchBtn.click();
       
       expect(searchPage.searchInput).toHaveValue(resources.searchValue);                   
    });

    it('Should redirect to a new page and verify title', async ()=> {
        expect(browser).toHaveTitle(resources.laptopPageTitle);              
    });

    it('Should update the search category', async ()=> { 
        waitForTextChange(searchPage.category, "PC Laptops & Netbooks", 3000); 
        await expect(searchPage.category).toHaveText("PC Laptops & Netbooks");
    });

})