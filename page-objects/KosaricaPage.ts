import {Locator, Page} from '@playwright/test';

export class KosaricaPage {

    readonly page: Page;
    readonly praznaKosarica: Locator;
    readonly kosaricaList: Locator;
    readonly kosaricaItem: Locator;
    readonly itemKolicina: Locator;
    readonly itemPlus: Locator;
    readonly itemMinus: Locator;
    readonly itemDelete: Locator;

    constructor(page: Page){
        this.page = page;
        this.praznaKosarica = page.locator(".kosarica-list >> h2");
        this.kosaricaList = page.locator(".kosarica-list");
        this.kosaricaItem = page.locator(".kosarica-list >> li");
        this.itemKolicina = page.locator(".kosarica-item kolicina mobile-off >> input[type='text']");
        this.itemPlus = page.locator(".increase");
        this.itemMinus = page.locator(".decrease");
        this.itemDelete = page.locator(".remove-cart");
    }

}

