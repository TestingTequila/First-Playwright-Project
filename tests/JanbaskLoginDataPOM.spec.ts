import {test, expect} from "@playwright/test";
import { AppData } from "./Data/AppData";
import { YourStore } from "../pages/YourStore.page";
import { AccountLogin } from "../pages/AccountLogin.page";
import { MyAccount } from "../pages/MyAccount.page";

test('To validate login feature using POM', async ({ page }) => {
    
    let yourStore;
    let accountLogin;
    let myAccount;

    //1- Open the browser and Enter the url
    await page.goto(AppData.URL);

    //2- Click on My Account icon
    yourStore = new YourStore(page);
    await yourStore.clickOnMyAccountIcon();

    //3- Click on login Link
    await yourStore.clickOnLoginLink();

    //4- Enter correct email
    accountLogin = new AccountLogin(page);
    await accountLogin.enterEmail();

    //5- Enter correct password
    await accountLogin.enterPassword();

    //6- Click on Login button
    await accountLogin.clickOnLoginButton();

    //7- Validate Login Status
    myAccount = new MyAccount(page);
    await myAccount.validateLoginStatus();
   

})