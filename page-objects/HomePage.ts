import {Locator, Page} from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly logo: Locator;
    readonly searchBar: Locator;
    readonly searchSubmit: Locator;
    readonly searchResponse: Locator;
    readonly kosarica: Locator;
    readonly newsletterEmail: Locator;
    readonly newsletterButton: Locator;
    readonly newsletterPotvrda: Locator;

    constructor(page: Page){
        this.page = page;
        this.logo = page.locator(".logo");
        this.searchBar = page.locator("#search-form >> .query");
        this.searchResponse = page.locator("#search-form >> .search-response");
        this.searchSubmit = page.locator("#search-form >> .submit");
        this.kosarica = page.locator("#desktop-cart-button");
        this.newsletterEmail = page.locator(".newsletter-signup-email");
        this.newsletterButton = page.locator(".newsletter-submit");
        this.newsletterPotvrda = page.locator("#newsletterAdd");
    }

    async goToHomepage() {
        await this.page.goto("https://www.hgspot.hr/")
    }
}

