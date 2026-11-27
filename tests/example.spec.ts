import { test, expect } from '@playwright/test';

test('Launching the Application', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');
});


test('Capturing Page URL', async ({ page }) => {

  // Launch the application
  await page.goto('https://practice.sdetunicorns.com/');

  // Click on Get Started button
  const getStartedButton = page.locator('#get-started');

  await getStartedButton.click();

  var currentUrl = page.url();

  console.log("Current URL is : " + currentUrl);

});

test('Validate Page Title', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');
  await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
});



test('Click on Get Started Button', async ({ page }) => {

  // Launch the application
  await page.goto('https://practice.sdetunicorns.com/');

  // Click on Get Started button
  const getStartedButton = page.locator('#get-started');

  await getStartedButton.click();

  var currentUrl = page.url();

  console.log("Current URL is : " + currentUrl);

  await expect(page).toHaveURL(currentUrl);

});

test('Capturing text exists or not', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');
 
  // identify the locator for the text
  const webText = page.locator('text=Think different. Make different.');

  console.log("Locator is : " + webText);

  console.log("Locator is Visible : " + await webText.isVisible());

  console.log("Text is : " + await webText.textContent());

  if(await webText.isVisible()) {
    console.log("Text is visible on the page");
  } else {
    console.log("Text is not visible on the page");
  }
    
});

test('Validate existing text', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');
 
  // identify the locator for the text
  const webText = page.locator('text=Think different. Make different.');

  console.log("Locator is : " + webText);

  console.log("Locator is Visible : " + await webText.isVisible());

  console.log("Text is : " + await webText.textContent());
  
  // validate the text is visible
  await expect(webText).toBeVisible();
    
});


// Locators 

