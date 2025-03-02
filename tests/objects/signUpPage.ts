import { Page, Locator } from '@playwright/test';

export class SignUpPage {
    constructor(private page: Page) { }

    get usernameInput(): Locator { return this.page.locator('[name="username"]'); }
    get emailInput(): Locator { return this.page.locator('[name="email"]'); }
    get passwordInput(): Locator { return this.page.locator('[name="password"]'); }
    get confirmPasswordInput(): Locator { return this.page.locator('[name="confirmPassword"]'); }
    get submitButton(): Locator { return this.page.locator('button[type="submit"]'); }
    get pageTitle(): Locator { return this.page.locator('h1'); }
    get homePageText(): Locator { return this.page.locator('p'); }
}