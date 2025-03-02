import { test, expect } from '@playwright/test'
import { SignUpPage } from '../objects/signUpPage';
import { SignUpPageHelper } from '../helpers/signUpPage.helpers';

test('Verify that a sign-up is successful with a valid username, email, and password', async ({ page }) => {

    const signUpPage = new SignUpPage(page);
    const signUpPageHelper = new SignUpPageHelper(page);

    await test.step('Open sign up page', async () => {
        await page.goto('https://auth-home-task.vercel.app/register');
        await signUpPage.pageTitle.waitFor();
        await expect(signUpPage.pageTitle).toHaveText('Registration Form');
    });

    await test.step('Fill in the registration form', async () => {
        await signUpPageHelper.enterUserName(3, 20);
        await signUpPageHelper.enterEmailAddress('example.com');
        await signUpPageHelper.enterPassword('Testing1');
    });

    await test.step('Submit the form', async () => {
        await signUpPage.submitButton.click();
        await signUpPage.pageTitle.waitFor();
        await expect(signUpPage.pageTitle).toHaveText('Welcome to the Home Page!');
        await expect(signUpPage.homePageText).toHaveText('You have registered successfully!');
    });
});