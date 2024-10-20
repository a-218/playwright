import { expect, Locator, Page } from "@playwright/test"

export class LoginPage
{
    readonly page: Page;
    readonly loginInbox: Locator;
    readonly passwordInbox: Locator;
    readonly pageTitle: Locator;
    readonly signinButton: Locator;


    constructor(page: Page){
        this.page= page;
        this.loginInbox = page.locator('#email1');
        this.passwordInbox = page.locator('#password1');
        this.signinButton = page.getByRole('button', { name: 'Sign in' });
    }


    async goto(){
        await this.page.goto('https://freelance-learn-automation.vercel.app/login');
    }

    async login(username, password){
        await this.loginInbox.fill(username);
        await this.passwordInbox.fill(password);
        await this.signinButton.click(); 
    }
    
}



