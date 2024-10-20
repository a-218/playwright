import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';

test('Login To Application Using POM', async ({ page }) => 
{
    const loginPage=new LoginPage(page)
    
    await loginPage.goto();
    await loginPage.login("admin@email.com","admin@123");

    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app'); // Replace with the expected URL after sign-in

    const homePage = new HomePage(page)
    const isTrust = await homePage.verifyLoginIn();
    expect(isTrust).toBe(true);
})

