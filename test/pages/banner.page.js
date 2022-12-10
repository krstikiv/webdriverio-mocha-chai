import Page from "./page";

class BannerPage extends Page {

    get $topBanner () { return $('#rtm_list1  div'); }
    get $bannerTitle () { return $('span*=Soccer euphoria is here'); }
    get $bannerLink () { 
        return $('#rtm_list1 a.hl-full-bleed-banner__container.focus-inset'); 
    }
    get $bannerBtn () { return $('#rtm_list1 div.hl-cta__default'); }

    async open () {
        await super.open('/');
    }
}

export default new BannerPage();