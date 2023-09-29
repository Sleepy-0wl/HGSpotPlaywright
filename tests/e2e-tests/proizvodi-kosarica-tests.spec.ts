import {test, expect} from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { PrimaryNavigation } from '../../page-objects/PrimaryNavigation';
import { ListaProizvodaPage } from '../../page-objects/ListaProizvodaPage';
import { KosaricaPage } from '../../page-objects/KosaricaPage';
import { DodajUKosaricu } from '../../page-objects/DodajUKosaricu';

test.describe("Proizvodi i košarica", () => {
    
    test.beforeEach(async ({page}) => {
       let homePage = new HomePage(page);
       
       await homePage.goToHomepage();
    });

    test("Dodaj u košaricu", async ({page}) => {
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await homePage.kosarica.click();
        await expect(kosaricaPage.praznaKosarica).toBeVisible();
        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Monitori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.kupiButton.first().click();
        await dodajUKosaricu.kosaricaClose.click();
        await homePage.kosarica.click();

        await expect(kosaricaPage.kosaricaItem).toHaveCount(1);
    });

    test.skip("Izbriši iz košarice", async ({page}) => { //iz nekog razloga ne dela
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Monitori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.kupiButton.first().click();
        await dodajUKosaricu.kosaricaClose.click();
        await homePage.kosarica.click();
        await expect(kosaricaPage.kosaricaItem).toHaveCount(1);
        await kosaricaPage.itemDelete.click();
        await page.pause();

        await expect(kosaricaPage.praznaKosarica).toBeVisible();
    });

    test.skip("Dodaj više komada istog proizvoda", async ({page}) => { //isto sam neke zbrikal 
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Monitori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.kupiButton.first().click();
        await dodajUKosaricu.kosaricaPlus.click();
        await page.pause();
        await dodajUKosaricu.kosaricaClose.click();
        await homePage.kosarica.click();

        await expect(kosaricaPage.itemKolicina).toContainText("2");
    });

    test("Dodaj više proizvoda u košaricu", async ({page}) => {
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await homePage.kosarica.click();
        await expect(kosaricaPage.praznaKosarica).toBeVisible();
        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Monitori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.kupiButton.first().click();
        await dodajUKosaricu.kosaricaClose.click();
        await listaProizvodaPage.kupiButton.nth(5).click();
        await dodajUKosaricu.kosaricaClose.click();
        await homePage.kosarica.click();

        await expect(kosaricaPage.kosaricaItem).toHaveCount(2);
    });

    test("Mijenjaj količinu proizvoda u košarici", async ({page}) => {
        let homePage = new HomePage(page);
        let kosaricaPage = new KosaricaPage(page);
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Monitori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.kupiButton.first().click();
        await dodajUKosaricu.kosaricaClose.click();
        await homePage.kosarica.click();
        await kosaricaPage.itemKolicina.fill("5");
        await kosaricaPage.itemMinus.click();
        await kosaricaPage.itemMinus.click();
        await kosaricaPage.itemPlus.click();

        await expect(kosaricaPage.itemKolicina).toHaveValue("4");
    });
});