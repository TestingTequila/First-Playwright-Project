import {test, expect} from "@playwright/test";
import { AppData } from "./Data/AppData";
import { TestData } from "./Data/TestData";
test('To validate login feature with hidden Data', async ({ page }) => {
    
    //1- Open the browser and Enter the url
    await page.goto(AppData.URL);

    //await page.pause();

    //2- Click on My Account icon
    const myAccountIcon =page.locator("//i[@class='fa fa-user']");
    await myAccountIcon.click();
    
    //1. Hardcoded wait 
    //await page.waitForTimeout(5000); 

    //2. Conditional Wait
    //await page.locator("//a[text()='Login']").waitFor({state:"attached", timeout:5000});

    //3- Click on login Link
    const loginLink =page.locator("//a[text()='Login']");
    await loginLink.click();

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