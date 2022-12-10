import Page from "./page";

class WatchesPage extends Page {

    get $watchesCategoryList () { return $$('section[id="s0-17-12_2-0-1[0]-0-0"] ul li'); }

    get $$fashionLink () { 
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0]; }

    get $watchesLink () { 
        return $('.hl-cat-nav__sub-cat-col a[href*="watches"]'); }

    async open () {
        await super.open('/');
    }

   async getWatchesCategoryListText() {
    const liTexts = await Promise.all(await this.$watchesCategoryList.map((e) => e.getText()))
            
    return liTexts;
    }

 

}

export default new WatchesPage();
