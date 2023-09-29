import {Locator, Page} from '@playwright/test';

export class PrimaryNavigation {

    readonly page: Page;
    readonly racunala: Locator;
    readonly itOprema: Locator;
    readonly mobiteli: Locator;
    readonly multimedija: Locator;
    readonly aparati: Locator;
    readonly gaming: Locator;
    readonly eAsortiman: Locator;
    readonly ostalo: Locator;
    readonly akcije: Locator;
    readonly subMenuH3: Locator;
    readonly submenuLinks: Locator;


    constructor(page: Page){
        this.page = page;
        this.racunala = page.locator(".root-link").filter({hasText: "Računala"});
        this.itOprema = page.locator(".root-link").filter({hasText: "IT Oprema"});
        this.mobiteli = page.locator(".root-link").filter({hasText: "Mobiteli i oprema"});
        this.multimedija = page.locator(".root-link").filter({hasText: "Multimedija"});
        this.aparati = page.locator(".root-link").filter({hasText: "Kućanski aparati"});
        this.gaming = page.locator(".root-link").filter({hasText: "Gaming"});
        this.eAsortiman = page.locator(".root-link").filter({hasText: "E-asortiman"});
        this.ostalo = page.locator(".root-link").filter({hasText: "Ostalo"});
        this.akcije = page.locator(".root-link").filter({hasText: "Akcije"});
        this.subMenuH3 = page.locator("#primary-desktop-nav >> .submenu >> .col >> .category >> h3");
        this.submenuLinks = page.locator("#primary-desktop-nav >> .submenu >> .col >> .category >> a");
    }

    
}

