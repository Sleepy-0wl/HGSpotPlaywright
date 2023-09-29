import {Locator, Page} from '@playwright/test';

export class ProizvodPage {

    readonly page: Page;
    readonly imeProizvoda: Locator;
    readonly kupiButton: Locator;
    readonly upitButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.imeProizvoda = page.locator("#product-info >> h1");
        this.kupiButton = page.locator(".buy");
        this.upitButton = page.locator(".upit");
    }

}

