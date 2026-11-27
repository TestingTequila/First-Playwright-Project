import {test, expect} from "@playwright/test";

test('Launching the Application', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
})


test('Validate Home Text - CSS & Text', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    // identify the locator for the text
    const homeText = page.locator('#zak-primary-menu>> text = Home');

    console.log("Locator is Visible : " + await homeText.isVisible());

    console.log("Text is : " + await homeText.textContent());

    //validate the text is visible or not
    await expect(homeText).toBeVisible();
})

test('Validate Home Text using XPath', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    // identify the locator for the text
    const homeText = page.locator("//ul[@id='zak-primary-menu']//a[text()='Home']");

    console.log("Locator is Visible : " + await homeText.isVisible());

    console.log("Text is : " + await homeText.textContent());

    await homeText.click();
})

test('Click on Search Icon', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');
    const searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@href='#' and @class='zak-header-search__toggle']]");
    await searchIcon.click();
})

test('Write text of menu items', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');

    const menuItems = page.locator("//ul[@id='zak-primary-menu']/li");

    for(const menuItem of await menuItems.elementHandles()) {
        const menuItemText = await menuItem.innerText();
        console.log("Menu Item Text is : " + menuItemText);
    }
})

test('Fill the Contact Form', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/contact/');
    // const nameTextBox = page.locator("//input[@id='evf-277-field_ys0GeZISRs-1']");
    // const emailTextBox = page.locator("//input[@id='evf-277-field_LbH5NxasXM-2']");
    // const phoneTextBox = page.locator("//input[@id='evf-277-field_66FR384cge-3']");
    // const messageTextArea = page.locator("//textarea[@id='evf-277-field_yhGx3FOwr2-4']");

    const nameTextBox = page.locator('#evf-277-field_ys0GeZISRs-1');
    const emailTextBox = page.locator('#evf-277-field_LbH5NxasXM-2');
    const phoneTextBox = page.locator('#evf-277-field_66FR384cge-3');
    const messageTextArea = page.locator('#evf-277-field_yhGx3FOwr2-4');

    await nameTextBox.fill("Jason Roger");
    await emailTextBox.fill("jason.roger@janbask.com");
    await phoneTextBox.fill("5464545654");
    await messageTextArea.fill("Can you please schedule the meeting....");
})
