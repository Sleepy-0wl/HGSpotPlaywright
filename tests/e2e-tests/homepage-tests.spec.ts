import {test, expect} from '@playwright/test';

import { HomePage } from '../../page-objects/HomePage';
import { TopBar } from '../../page-objects/TopBar';
import { ListaProizvodaPage } from '../../page-objects/ListaProizvodaPage';
import { HotDeals } from '../../page-objects/HotDeals';
import { KosaricaPage } from '../../page-objects/KosaricaPage';
import { RegisterPage } from '../../page-objects/RegisterPage';

test.describe("Homepage stuff", () => {
    
    test.beforeEach("Get to the page", async ({page}) => {
        let homePage = new HomePage(page);
        await homePage.goToHomepage();
    });

    test("Quick search", async ({page}) => {
        let homePage = new HomePage(page);

        await homePage.searchBar.fill("wii");

        await expect(homePage.searchResponse.locator(".search-price")).toHaveCount(5); 
    });

    test("Item search", async ({page}) => {
        let homePage = new HomePage(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await homePage.searchBar.fill("kombat");
        await homePage.searchSubmit.click();

        await expect(listaProizvodaPage.proizvod).toHaveCount(14);
    });

    test("Logo brings us back", async ({page}) => {
        let homePage = new HomePage(page);
        let topBar = new TopBar(page);
        let hotDeals = new HotDeals(page);

        await topBar.oNama.click();
        await homePage.logo.click();

        await expect(hotDeals.akcijaTab).toBeVisible();
    });

    test("Button with shopping cart is shopping cart", async ({page}) => {
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);

        await homePage.kosarica.click();
        await expect(kosaricaPage.praznaKosarica).toBeVisible();
    });

    test("Prijavimo se na newsletter", async ({page}) => {
        let homePage = new HomePage(page);
        let registerPage = new RegisterPage(page);

        await homePage.newsletterEmail.fill(registerPage.emailGenerator());
        await homePage.newsletterButton.click();

        await expect(homePage.newsletterPotvrda).toBeVisible();
    });
});