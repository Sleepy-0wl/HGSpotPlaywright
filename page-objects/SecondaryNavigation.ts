import {Locator, Page} from '@playwright/test';

export class SecondaryNavigation {

    readonly page: Page;
    readonly apple: Locator;
    readonly smartHome: Locator;
    readonly zabava: Locator;
    readonly sveZaUred: Locator;
    readonly fitness: Locator;
    readonly outdoor: Locator;
    readonly sveZaDom: Locator;
    readonly vrtIAlati: Locator;
    readonly subMenuH3: Locator;
    readonly submenuLinks: Locator;


    constructor(page: Page){
        this.page = page;
        this.apple = page.locator(".root-link").filter({hasText: "Apple"});
        this.smartHome = page.locator(".root-link").filter({hasText: "Smart Home"});
        this.zabava = page.locator(".root-link").filter({hasText: "Kućna zabava"});
        this.sveZaUred = page.locator(".root-link").filter({hasText: "Sve za ured"});
        this.fitness = page.locator(".root-link").filter({hasText: "Fitness i ljepota"});
        this.outdoor = page.locator(".root-link").filter({hasText: "Outdoor"});
        this.sveZaDom = page.locator(".root-link").filter({hasText: "Sve za dom"});
        this.vrtIAlati = page.locator(".root-link").filter({hasText: "Vrt i alati"});
        this.subMenuH3 = page.locator("#secondary-desktop-nav >> .submenu >> .col >> .category >> h3");
        this.submenuLinks = page.locator("#secondary-desktop-nav >> .submenu >> .col >> .category >> a");
    }

    
}

