import {test, expect} from '@playwright/test';

import { HomePage } from '../../page-objects/HomePage';
import { TopBar } from '../../page-objects/TopBar';
import { LogInPage } from '../../page-objects/LogInPage';

test.describe("Top Bar Navigation", () => {
    
    test.beforeEach(async ({page}) => {
        let homePage = new HomePage(page);

        await homePage.goToHomepage();
    });

   test("O nama", async ({page}) => {
        let topBar = new TopBar(page);

        await topBar.oNama.click();

        await expect(page.locator("h1").getByText("O nama")).toBeVisible();
   });

   test("Novosti", async ({page}) => {
    let topBar = new TopBar(page);

    await topBar.novosti.click();

    await expect(page.locator("h1").getByText("Novosti")).toBeVisible();
    });

    test("Dostava", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.dostava.click();
    
        await expect(page.locator("h1").getByText("Dostava")).toBeVisible();
    });

    test("Plaćanje", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.placanje.click();
    
        await expect(page.locator("h1").getByText("Plaćanje", {exact:true})).toBeVisible();
    });

    test("Servis", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.servis.click();
    
        await expect(page.locator("h1").getByText("Servis")).toBeVisible();
    });

    test("Kontakt", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.kontakt.click();
    
        await expect(page.locator("h1").getByText("Kontakt")).toBeVisible();
    });

    test("Karijera", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.karijera.click();
    
        await expect(page.locator("h1").getByText("Karijera")).toBeVisible();
    });

    test("Poslovnice", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.poslovnice.click();
    
        await expect(page.locator("h1").getByText("Poslovnice")).toBeVisible();
    });

    test("Akcije i popusti", async ({page}) => {
        let topBar = new TopBar(page);
    
        await topBar.akcije.click();
    
        await expect(page.locator("h1").getByText("Akcije")).toBeVisible();
    });

    test("Prijava", async ({page}) => {
        let topBar = new TopBar(page);
        let loginPage = new LogInPage(page);
    
        await topBar.prijava.click();
        
        await expect(loginPage.registracijaButton).toBeVisible();
    });
});