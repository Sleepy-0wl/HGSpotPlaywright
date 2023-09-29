import {Locator, Page} from '@playwright/test';

export class TopBar {

    readonly page: Page;
    readonly oNama: Locator;
    readonly novosti: Locator;
    readonly dostava: Locator;
    readonly placanje: Locator;
    readonly servis: Locator;
    readonly kontakt: Locator;
    readonly karijera: Locator;
    readonly brojTel: Locator;
    readonly poslovnice: Locator;
    readonly akcije: Locator;
    readonly prijava: Locator;

    constructor(page: Page){
        this.page = page;
        this.oNama = page.locator("#primary-topbar-nav").getByText("O nama");
        this.novosti = page.locator("#primary-topbar-nav").getByText("Novosti");
        this.dostava = page.locator("#primary-topbar-nav").getByText("Dostava");
        this.placanje = page.locator("#primary-topbar-nav").getByText("Plaćanje");
        this.servis = page.locator("#primary-topbar-nav").getByText("Servis");
        this.kontakt = page.locator("#primary-topbar-nav").getByText("Kontakt");
        this.karijera = page.locator("#primary-topbar-nav").getByText("Karijera");
        this.brojTel = page.locator("#tertiary-topbar-nav >> a:nth-child(1)");
        this.poslovnice = page.locator("#tertiary-topbar-nav >> a:nth-child(2)");
        this.akcije = page.locator("#tertiary-topbar-nav >> a:nth-child(3)");
        this.prijava = page.locator("#tertiary-topbar-nav >> a:last-of-type");
    }    
}

