import { TestData } from "../tests/Data/TestData";

export class AccountLogin
{
    page: any;
    
    constructor(page: any)
    {
       this.page = page;
    }

    async enterEmail(){
    const emailTextBox = this.page.locator("//input[@id='input-email']");
    await emailTextBox.fill(TestData.EMAIL_ID);
    }

    async enterPassword(){
    const passwordTextBox =this.page.locator("//input[@id='input-password']");
    await passwordTextBox.fill(TestData.PASSWORD);
    }

    async clickOnLoginButton(){
    const loginButton =this.page.locator("//input[@type='submit']");
    await loginButton.click();
    }

}