import { Page, Locator, expect } from '@playwright/test';
import { SignUpPage } from '../objects/signUpPage';

export class SignUpPageHelper {
    private signUpPage: SignUpPage;

    constructor(private page: Page) {
        this.signUpPage = new SignUpPage(page);
    }

    /**
     * Fills the randomly generated user name into the "Username" field
     * To perfom happy path tests - determine allowed min/max character amount 
     * To perform negative tests - determine not allowed min/max character amount
     * @param minLength min characters
     * @param maxLength max characters
     */

    async enterUserName(minLength: number, maxLength: number) {

        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

        let username = '';
        for (let i = 0; i < length; i++) {
            username += chars[Math.floor(Math.random() * chars.length)];
        }

        await this.signUpPage.usernameInput.click();
        await this.signUpPage.usernameInput.fill(username);

        await expect(this.signUpPage.usernameInput).toHaveValue(username);
    }

    /**
     * Fills in the randomly generated email address into the "Email" field
     * To perfom happy path tests - determine allowed domain address 
     * To perform negative tests - determine not allowed domain address
     * @param domain email address domain address
     */
    async enterEmailAddress(domain: string) {

        const email = `user${Math.floor(Math.random() * 100000)}@${domain}`;

        await this.signUpPage.emailInput.click();
        await this.signUpPage.emailInput.fill(email);

        await expect(this.signUpPage.emailInput).toHaveValue(email);
    }

    /**
     * Fills in the password into the "Password" and the "Confirm Password" fields
     * To perfom happy path tests - determine allowed password 
     * To perform negative tests - determine not allowed password
     * @param password 
     */
    async enterPassword(password: string) {
        await this.signUpPage.passwordInput.click();
        await this.signUpPage.passwordInput.fill(password);

        await this.signUpPage.confirmPasswordInput.click();
        await this.signUpPage.confirmPasswordInput.fill(password);

    }
}