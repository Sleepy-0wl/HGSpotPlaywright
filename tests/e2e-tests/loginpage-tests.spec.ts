import {test, expect} from '@playwright/test';

import { LogInPage } from '../../page-objects/LogInPage';
import { ProfilPage } from '../../page-objects/ProfilPage';
import { RegisterPage } from '../../page-objects/RegisterPage';
import { TopBar } from '../../page-objects/TopBar';

test.describe("Login page stuff", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://www.hgspot.hr/prijava");
    });

    test("Ulazak u registraciju", async ({page}) => {
        let logInPage = new LogInPage(page);
        let registerPage = new RegisterPage(page);

        await logInPage.registracijaButton.click();
        await expect(registerPage.imeInput).toBeVisible();
    });

    test("Neispravan mail i lozinka", async ({page}) => {
        let logInPage = new LogInPage(page);

        await logInPage.emailInput.fill("meow@testmail.com");
        await logInPage.passwordInput.fill("0");
        await logInPage.prijavaButton.click();

        await expect(logInPage.prijavaError).toContainText("E-mail ili lozinka nisu ispravni.");
    });

    test("Zaboravljena lozinka", async ({page}) => {
       let logInPage = new LogInPage(page);
       let registerPage = new RegisterPage(page);

       await logInPage.zaboravljenPassButton.click();
       await logInPage.zaboravljenPassButton.dispatchEvent('click');  //ak stavim samo jedan click ili samo jedan dispatchevent-click, ne radi dobro, idk
       await logInPage.zaboravljenEmailInput.fill(registerPage.emailGenerator());
       await logInPage.zaboravljenPassSubmit.click();

       await expect(logInPage.poslanMailText).toBeVisible();
    });
    
    test("Proper login", async ({page}) => {
        let logInPage = new LogInPage(page);
        let profilPage = new ProfilPage(page);

        await logInPage.emailInput.fill("navicevos@gmail.com");
        await logInPage.passwordInput.fill("Testna11");
        await logInPage.prijavaButton.click();

        await expect(profilPage.podaciNaslov).toBeVisible();
    });

    test("Odjava", async ({page}) => {
        let logInPage = new LogInPage(page);
        let topBar = new TopBar(page);

        await logInPage.emailInput.fill("navicevos@gmail.com");
        await logInPage.passwordInput.fill("Testna11");
        await logInPage.prijavaButton.click();
        await topBar.prijava.click(); //prijava i odjava isti gumb pa samo koristim isti lokator, makar je ime kontraintuitivno

        await expect(page.locator("h1").getByText("Odjava s računa")).toBeVisible();

    });
});