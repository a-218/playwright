import { expect, Locator, Page } from "@playwright/test"

export class HomePage
{
    readonly page: Page;
    readonly sideMenu: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.sideMenu = page.getByAltText('menu');
    }

    async verifyLoginIn(): Promise<boolean> {
       return await this.sideMenu.isVisible();
    }
}
