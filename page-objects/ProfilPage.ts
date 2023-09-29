import {Locator, Page} from '@playwright/test';

export class ProfilPage {

    readonly page: Page;
    readonly podaciNaslov: Locator;

    constructor(page: Page){
        this.page = page;
        this.podaciNaslov = page.getByText("Moji podaci");
    }

}

