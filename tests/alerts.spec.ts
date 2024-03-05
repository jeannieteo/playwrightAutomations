import { test, expect } from '@playwright/test';

test('alert1', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud");
    
    page.on("dialog",async (alert)=> {
        const text1 = alert.message();
        console.log("alert1: " + text1);
        expect(text1 == "I am an alert box!");
        await alert.accept();
    })
    await page.locator("//p[contains(text(),'JavaScript Alerts')]/button").click();
})

test('alert2', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud");
    
    page.on("dialog",async (alert)=> {
        const text2 = alert.message();
        console.log("alert2: " + text2);
        expect(text2 == "Press a button!");
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect( await page.locator("id=confirm-demo").textContent() == "You pressed Cancel!");
})

test('alert3', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud");
    
    page.on("dialog",async (alert)=> {
        const text3 = alert.message();
        console.log("alert3: " + text3);
        expect(text3 == "Please enter your name");
        await alert.accept("Spiderling");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect( await page.locator("id=prompt-demo").textContent() == "You have entered 'Spiderling' !");
})

test('alert4', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    page.on("dialog", async (alert) => {
        const text4 = alert.message();
        console.log("alert4: " + text4);
        expect(text4 == "This is the place where the content for the modal dialog displays");
        await alert.accept();
        await page.locator("button:has-text('Launch Modal')").nth(0).click();
    })
})