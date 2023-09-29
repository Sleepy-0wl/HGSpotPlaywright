import {Locator, Page} from '@playwright/test';

export class DodajUKosaricu {

    readonly page: Page;
    readonly kosaricaAddModal: Locator;
    readonly kosaricaClose: Locator;
    readonly kosaricaKolicina: Locator;
    readonly kosaricaPlus: Locator;
    readonly kosaricaMinus: Locator;
    readonly nastaviKupovinu: Locator;
    readonly zavrsiKupovinu: Locator;

    constructor(page: Page){
        this.page = page;
        this.kosaricaAddModal = page.locator("#kosaricaAdd");
        this.kosaricaClose = page.locator("#kosaricaClose")
        this.kosaricaKolicina = page.locator("#kosaricaAdd >> input[type='text']");
        this.kosaricaPlus = page.locator(".increase");
        this.kosaricaMinus = page.locator(".decrease");
        this.nastaviKupovinu = page.locator("#kosaricaAdd >> .kupovina");
        this.zavrsiKupovinu = page.locator("#kosaricaAdd >> .blagajna");
    }

}

