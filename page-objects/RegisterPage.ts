import {Locator, Page} from '@playwright/test';

export class RegisterPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPassword: Locator;
    readonly imeInput: Locator;
    readonly prezimeInput: Locator;
    readonly telefonInput: Locator;
    readonly drzavaSelect: Locator; //nebum ga deklariral jer zapravo nema izbora, samo je Hrvatska u izboru i pre-selectana je
    readonly mjestoInput: Locator;
    readonly mjestoSearch: Locator;
    readonly mjestoClickable: Locator;
    readonly adresaInput: Locator;
    readonly newsletterCheckbox: Locator;
    readonly uvjetiCheckbox: Locator;
    readonly nastaviButton: Locator;
    readonly neispravanMail: Locator;
    readonly uspjesnaReg: Locator;
    readonly passwordError: Locator;
    readonly confirmError: Locator;
    readonly imeError: Locator;
    readonly prezimeError: Locator;
    readonly mjestoError: Locator;
    readonly adresaError: Locator;
    readonly uvjetiError: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.locator(".email-field >> input");
        this.passwordInput = page.getByPlaceholder("Vaša šifra");
        this.confirmPassword = page.getByPlaceholder("Ponovite šifru");
        this.imeInput = page.locator("input[name='firstname']");
        this.prezimeInput = page.locator("input[name='lastname']");
        this.telefonInput = page.getByPlaceholder("Kontakt telefon");
        this.mjestoInput = page.locator(".select2-results__options >> li");
        this.mjestoSearch = page.locator(".select2-search__field");
        this.mjestoClickable = page.getByLabel('Odaberite...')
        this.adresaInput = page.locator(".hidden-mjesto-adresa-fields >> input");
        this.newsletterCheckbox = page.locator("#novosti");
        this.uvjetiCheckbox = page.locator("input[name='agree']");
        this.nastaviButton = page.locator("input[type='submit']");
        this.neispravanMail = page.locator("#fizicka-osoba-check-email-status");
        this.uspjesnaReg = page.locator(".register-success >> h1");
        this.passwordError = page.getByText('Lozinka mora sadržavati između 4 i 20 znakova!');
        this.confirmError = page.locator(".text-danger:nth-child(2)");
        this.imeError = page.getByText('Ime mora sadržavati između 1 i 32 znaka!', { exact: true });
        this.prezimeError = page.getByText('Prezime mora sadržavati između 1 i 32 znaka!');
        this.mjestoError = page.getByText('Mjesto obavezan!')
        this.adresaError = page.getByText('Adresa mora sadržavati između 3 i 32 znaka!');
        this.uvjetiError = page.getByText('Morate prihvatiti Uvjete poslovanja i izjavu o privatnosti podataka!');
    }

    emailGenerator(){
        let email = Math.random().toString(36).slice(2, 9);
        return email+'@protonmail.com';
    }
    passwordGenerator(){
        let password = Math.random().toString(36).slice(2, 10);
        return password;
    }
    //poboljšao bi oba generatora na način da primaju parametar duljine maila/passworda koji generiraju, tak da mogu generirati i prekratke/preduge passworde i mailove
}

