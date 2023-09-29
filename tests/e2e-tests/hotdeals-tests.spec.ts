import {test, expect} from '@playwright/test';

import { HomePage } from '../../page-objects/HomePage';
import { HotDeals } from '../../page-objects/HotDeals';
import { ProizvodPage } from '../../page-objects/ProizvodPage';
import { DodajUKosaricu } from '../../page-objects/DodajUKosaricu';

test.describe("Hot Deals tests", () => {

    test.beforeEach(async ({page}) => {
        let homePage = new HomePage(page);

        await homePage.goToHomepage();
        await page.waitForTimeout(500);
    });
    
    test("Switch tabs", async ({page}) => {
        let hotDeals = new HotDeals(page);

        await hotDeals.bestBuyTab.click();
        await expect(hotDeals.bestBuyContent).toBeVisible();
        await hotDeals.novoTab.click();
        await expect(hotDeals.novoContent).toBeVisible();
        await hotDeals.hotTab.click();
        await expect(hotDeals.hotContent).toBeVisible();
        await hotDeals.akcijaTab.click();
        await expect(hotDeals.akcijaContent).toBeVisible();
    });

    test("Click on hot deal", async ({page}) => {
        let hotDeals = new HotDeals(page);
        let proizvodPage = new ProizvodPage(page);

        await hotDeals.hotTab.click();
        await hotDeals.hotContent.locator("section:nth-child(3) >> .product-image").click();
        await expect(proizvodPage.imeProizvoda).toBeVisible();
        
    });

    test("Add hot deal to košarica", async ({page}) => {
        let hotDeals = new HotDeals(page);
        let dodajUKosaricu = new DodajUKosaricu(page);

        await hotDeals.bestBuyTab.click();
        await hotDeals.bestBuyContent.locator("section:nth-child(4) >> .product-buy").click();
        
        await expect(dodajUKosaricu.kosaricaAddModal).toBeVisible();
    });
});