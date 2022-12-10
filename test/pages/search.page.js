import Page from "./page";

class SearchPage extends Page {
    
    get searchInput () { return $('#gh-ac'); }
    get searchBtn () { return $('#gh-btn'); }
    get category () { return $('#gh-cat option:nth-child(1)'); }
   
    async open () {
        await super.open('/');
    }
}

export default new SearchPage();