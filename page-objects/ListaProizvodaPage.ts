import {Locator, Page} from '@playwright/test';

export class ListaProizvodaPage {

    readonly page: Page;
    readonly brojProizvodaNaStranici: Locator;
    readonly cijenaOd: Locator;
    readonly cijenaDo: Locator;
    readonly filterPath: Locator;
    readonly filterLista: Locator;
    readonly brandsPath: Locator;
    readonly ponistiFilter: Locator;
    readonly sortByName: Locator;
    readonly sortByPrice: Locator;
    readonly listaProizvoda: Locator;
    readonly proizvod: Locator;
    readonly slikaProizvoda: Locator;
    readonly sifraProizvoda: Locator;
    readonly imeProizvoda: Locator;
    readonly cijenaProizvoda: Locator;
    readonly upitButton: Locator;
    readonly kupiButton: Locator;
    readonly brojkaPagePath: Locator;
    readonly nextPageButton: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.brojProizvodaNaStranici = page.locator("#input-limit");
        this.cijenaOd = page.locator(".price-filters").getByPlaceholder("Cijena od");
        this.cijenaDo = page.locator(".price-filters").getByPlaceholder("Cijena do");
        this.filterPath = page.locator(".filter-select-wrapper");
        this.filterLista = page.locator(".select2-results__option")
        this.brandsPath = page.locator(".brand-link");
        this.ponistiFilter = page.locator(".cancel");
        this.sortByName = page.locator("#sort-by-name");
        this.sortByPrice = page.locator("#sort-by-price");
        this.listaProizvoda = page.locator(".product-layout");
        this.proizvod = page.locator(".product-container-comm");
        this.slikaProizvoda = page.locator(".product-image");
        this.sifraProizvoda = page.locator(".product-id");
        this.imeProizvoda = page.locator(".product-name");
        this.cijenaProizvoda = page.locator(".product-price");
        this.upitButton = page.locator(".product-upit");
        this.kupiButton = page.locator(".product-buy");
        this.brojkaPagePath = page.locator(".numbers >> .pagination-page");
        this.nextPageButton = page.locator(".next");
        
    }

}

