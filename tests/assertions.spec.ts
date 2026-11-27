import {test, expect} from "@playwright/test";

test('Validate the Page Title using Hard Assertion', async ({ page }) => {
    await page.goto("https://janbaskdemo.com/");

    await expect(page).not.toHaveTitle("Your Store");

    console.log("Will this be printed...");
})

test('Validate the Page Title using soft Assertion', async ({ page }) => {
    await page.goto("https://janbaskdemo.com/");

    await expect.soft(page).not.toHaveTitle("Your Store");
    console.log("Will this be printed...");
})