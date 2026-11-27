import { Locator, Page } from "@playwright/test";

export class YourStore2{

    page: Page;
    myAccountIcon: Locator;
    loginLink: Locator;

    constructor(page: Page){
       this.page = page;
       this.myAccountIcon = page.locator("//i[@class='fa fa-user']");
       this.loginLink = page.locator("//a[text()='Login']");
    }
}