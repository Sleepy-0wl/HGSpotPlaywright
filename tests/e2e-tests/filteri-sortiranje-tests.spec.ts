import {test, expect} from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { PrimaryNavigation } from '../../page-objects/PrimaryNavigation';
import { ListaProizvodaPage } from '../../page-objects/ListaProizvodaPage';

test.describe("Filteri i sortiranje", () => {
    
    test.beforeEach(async ({page}) => {
       let homePage = new HomePage(page);
       
       await homePage.goToHomepage();
    });

    test("Price filtering", async ({page}) => {
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.gaming.click();
        await primaryNavigation.submenuLinks.getByText("Igraće konzole", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.cijenaOd.pressSequentially("200");
        
        await expect(listaProizvodaPage.cijenaProizvoda.first()).toContainText("268,52");
    });

    test("Cijena-do filter i sortiranje po cijeni", async ({page}) => {
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.multimedija.click();
        await primaryNavigation.submenuLinks.getByText("Televizori", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.cijenaDo.pressSequentially("2000");
        await listaProizvodaPage.sortByPrice.click();
        
        await expect(listaProizvodaPage.cijenaProizvoda.first()).toContainText("1.919,00");
    });

    test("Sortiranje po imenu", async ({page}) => {  //super mi je HGSpot, ima sortiranje po imenu, a prva riječ na svakom proizvodu je ista - tip proizvoda (npr. Monitor)
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Miševi", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.sortByName.click();
        await expect(listaProizvodaPage.imeProizvoda.first()).toContainText("USB prijemnik LOGITECH");
        await listaProizvodaPage.sortByName.click();
        await expect(listaProizvodaPage.imeProizvoda.first()).toContainText("Bežični miš");
    });

    test("Filter by brand", async ({page}) => {
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.mobiteli.click();
        await primaryNavigation.submenuLinks.getByText("Smartphones", {exact:true}).click();
        await page.waitForTimeout(500);
        await listaProizvodaPage.brandsPath.getByText("SAMSUNG").click();
        
        await expect(listaProizvodaPage.imeProizvoda.first()).toContainText("Mobitel SAMSUNG");
    });

    test("Filteri proizvoda", async ({page}) => {
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Radna memorija", {exact:true}).click();
        await page.waitForTimeout(500);

        await listaProizvodaPage.filterPath.first().click();
        await listaProizvodaPage.filterLista.nth(3).click();
        await expect(listaProizvodaPage.imeProizvoda.first()).toContainText("DDR5");

        await listaProizvodaPage.filterPath.nth(1).click();
        await listaProizvodaPage.filterLista.nth(3).click();
        await expect(listaProizvodaPage.imeProizvoda.first()).toContainText("32 GB");
    });

    test("Poništi filtere", async ({page}) => {
        let primaryNavigation = new PrimaryNavigation(page);
        let listaProizvodaPage = new ListaProizvodaPage(page);

        await page.waitForTimeout(500);
        await primaryNavigation.itOprema.click();
        await primaryNavigation.submenuLinks.getByText("Procesori", {exact:true}).click();
        await page.waitForTimeout(500);

        await listaProizvodaPage.cijenaOd.pressSequentially("100");
        await listaProizvodaPage.filterPath.first().click();
        await listaProizvodaPage.filterLista.first().click();
        await listaProizvodaPage.filterPath.nth(1).click();
        await listaProizvodaPage.filterLista.nth(5).click();
        await expect(listaProizvodaPage.proizvod).toHaveCount(1);

        await listaProizvodaPage.ponistiFilter.click();
        await expect(listaProizvodaPage.proizvod).not.toHaveCount(1);
    });
});