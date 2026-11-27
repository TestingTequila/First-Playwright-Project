import {test, expect} from "@playwright/test";
import { AppData } from "./Data/AppData";
import { TestData } from "./Data/TestData";
import { YourStore2 } from "../pages2/YourStore2";
test('To validate login feature with POM2', async ({ page }) => {
    
    let yourStore2;

    //1- Open the browser and Enter the url
    await page.goto(AppData.URL);

    //2- Click on My Account icon   
    yourStore2 = new YourStore2(page);
    await yourStore2.myAccountIcon.click();
    await yourStore2.loginLink.waitFor({state:"attached", timeout:5000});

    //3- Click on login Link
    await yourStore2.loginLink.click();

    //4- Enter correct email
    const emailTextBox = page.locator("//input[@id='input-email']");
    await emailTextBox.fill(TestData.EMAIL_ID);

    //5- Enter correct password
    const passwordTextBox =page.locator("//input[@id='input-password']");
    await passwordTextBox.fill(TestData.PASSWORD);

    //6- Click on Login button
    const loginButton =page.locator("//input[@type='submit']");
    await loginButton.click();

    //7- Validate Login Status
    await expect(page).toHaveTitle(TestData.LOGIN_PAGE_TITLE);

    //3. Assertion Wait
    //await expect(page).toHaveTitle(TestData.LOGIN_PAGE_TITLE, {timeout:10000});

})