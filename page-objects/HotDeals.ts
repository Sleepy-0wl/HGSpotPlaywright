import {Locator, Page} from '@playwright/test';

export class HotDeals {

    readonly page: Page;
    readonly akcijaTab: Locator;
    readonly bestBuyTab: Locator;
    readonly novoTab: Locator;
    readonly hotTab: Locator;
    readonly akcijaContent: Locator;
    readonly bestBuyContent: Locator;
    readonly novoContent: Locator;
    readonly hotContent: Locator;

    constructor(page: Page){
        this.page = page;
        this.akcijaTab = page.locator(".header-tabs >> .tab-akcija");
        this.bestBuyTab = page.locator(".header-tabs >> .tab-bestbuy");
        this.novoTab = page.locator(".header-tabs >> .tab-novo");
        this.hotTab = page.locator(".header-tabs >> .tab-najprodavanije");
        this.akcijaContent = page.locator(".hot-deals-tabs >> #content-akcija");
        this.bestBuyContent = page.locator(".hot-deals-tabs >> #content-bestbuy");
        this.novoContent = page.locator(".hot-deals-tabs >> #content-novo");
        this.hotContent = page.locator(".hot-deals-tabs >> #content-najprodavanije");
    }
}

