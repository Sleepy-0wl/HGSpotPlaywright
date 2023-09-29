import {Locator, Page} from '@playwright/test';

export class LogInPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly prijavaButton: Locator;
    readonly registracijaButton: Locator;
    readonly prijavaError: Locator;
    readonly zaboravljenPassButton: Locator;
    readonly zaboravljenEmailInput: Locator;
    readonly zaboravljenPassSubmit: Locator;
    readonly poslanMailText: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.getByPlaceholder("E-mail adresa")
        this.passwordInput = page.locator("#input-password");
        this.prijavaButton = page.locator(".full-page >> input[type='submit']");
        this.registracijaButton = page.getByText("Registrirajte se");
        this.prijavaError = page.locator(".text-danger");
        this.zaboravljenPassButton = page.locator('#account-login div').filter({ hasText:'Ne sjećam se lozinke'});
        this.zaboravljenEmailInput = page.locator("#forgotpass >> #input-email");
        this.zaboravljenPassSubmit = page.locator("#forgotpass >> input[type='submit']");
        this.poslanMailText = page.getByText("Poruka s linkom za potvrdu je poslana na Vašu E-mail adresu.");
    }

    
}

