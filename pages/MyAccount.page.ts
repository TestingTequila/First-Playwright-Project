import { TestData } from "../tests/Data/TestData";
import { expect } from "@playwright/test";

export class MyAccount{
 
    page: any;

    constructor(page: any){
      this.page = page;
    }

    async validateLoginStatus(){
      await expect(this.page).toHaveTitle(TestData.LOGIN_PAGE_TITLE);
    }
}