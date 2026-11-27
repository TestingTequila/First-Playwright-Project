import {test, expect} from "@playwright/test";
test('To validate login feature when correct email and correct password is entered', async ({ page }) => {
    
    //1- Open the browser and Enter the url
    await page.goto("http://www.janbaskdemo.com/");

    //2- Click on My Account icon
    const myAccountIcon =page.locator("//i[@class='fa fa-user']");
    await myAccountIcon.click();

    await page.pause();

    //3- Click on login Link
    const loginLink =page.locator("//a[text()='Login']");
    await loginLink.click();

    //4- Enter correct email
    const emailTextBox = page.locator("//input[@id='input-email']");
    await emailTextBox.fill("ben.fletcher@janbask.com");

    //5- Enter correct password
    const passwordTextBox =page.locator("//input[@id='input-password']");
    await passwordTextBox.fill("test@1234");

    //6- Click on Login button
    const loginButton =page.locator("//input[@type='submit']");
    await loginButton.click();

    //7- Validate Login Status
    await expect(page).toHaveTitle("My Account", {timeout: 10000});

})