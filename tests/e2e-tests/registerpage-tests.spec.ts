import {test, expect} from '@playwright/test';

import { RegisterPage } from '../../page-objects/RegisterPage';


test.describe("Register stuff", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://www.hgspot.hr/registracija");
    });
    
    test("Email format wrong", async ({page}) => {
        let registerPage = new RegisterPage(page);

        await registerPage.emailInput.fill("awfaf");
        await page.locator(".email-field").click();

        await expect(registerPage.neispravanMail).toBeVisible();
    });

    test("Errori ispod polja", async ({page}) => {  //razdvojiti svaki u zasebni test?
        let registerPage = new RegisterPage(page);

        await registerPage.emailInput.fill(registerPage.emailGenerator());
        await registerPage.passwordInput.fill("02");
        await registerPage.confirmPassword.fill("01");
        await registerPage.imeInput.fill("0123456789012345678901234567890123456789");
        await registerPage.prezimeInput.fill("0123456789012345678901234567890123456789");
        await registerPage.mjestoClickable.click();
        await registerPage.mjestoInput.first().click();
        await registerPage.adresaInput.fill("2");
        await registerPage.nastaviButton.click();
        await registerPage.nastaviButton.click();

        //await expect(registerPage.passwordError).toContainText("Lozinka mora sadržavati između 4 i 20 znakova!");
        await expect(registerPage.confirmError).toContainText("Lozinke se ne podudaraju!");
        await expect(registerPage.imeError).toContainText("Ime mora sadržavati između 1 i 32 znaka!");
        await expect(registerPage.prezimeError).toContainText("Prezime mora sadržavati između 1 i 32 znaka!");
        //await expect(registerPage.mjestoError).toContainText("Mjesto obavezan!");
        await expect(registerPage.adresaError).toContainText("Adresa mora sadržavati između 3 i 32 znaka!");
        await expect(registerPage.uvjetiError).toContainText("Morate prihvatiti Uvjete poslovanja i izjavu o privatnosti podataka!");
        
    });

    test("Tražilica gradova", async ({page}) => {
        let registerPage = new RegisterPage(page);

        await registerPage.mjestoClickable.click();
        await registerPage.mjestoSearch.fill("Bede");

        await expect(registerPage.mjestoInput).toHaveCount(2);

        await registerPage.mjestoSearch.clear();
        await registerPage.mjestoSearch.fill("49221");

        await expect(registerPage.mjestoInput).toHaveCount(1);
    });

    test("Komplet registracija",async ({page}) => {
        let registerPage = new RegisterPage(page);

        await registerPage.emailInput.fill(registerPage.emailGenerator());
        await page.waitForTimeout(3000); //bez ove pauze mi prebrzo sve odradi i ne stigne se email verificirati pa sve zašteka
        let password = registerPage.passwordGenerator();
        await registerPage.passwordInput.fill(password);
        await registerPage.confirmPassword.fill(password);
        await registerPage.imeInput.fill("Ivan");
        await registerPage.prezimeInput.fill("Horvat");
        await registerPage.telefonInput.fill("0998877999");
        await registerPage.mjestoClickable.click();
        await registerPage.mjestoInput.first().click();
        await registerPage.adresaInput.fill("Testna ulica 22");
        await registerPage.uvjetiCheckbox.dispatchEvent('click');
        await registerPage.nastaviButton.click();

        await page.waitForTimeout(3000);
        await expect(registerPage.uspjesnaReg).toContainText("Vaš račun je izrađen!");
    });
});