import {Page, expect} from '@playwright/test';

export async function loginDemoBlaze(page: Page)   {
    //await page.locator("id=login2").click() //property
    await page.click("id=login2");
    await page.fill("#loginusername", 'tester1@test.com');
    await page.fill("#loginpassword", 'password@1234');
    await page.click("//button[text()='Log in']");
    const logoutlink = await page.locator("//a[text()='Log out']");
    expect(page.locator("#nameofuser")).toHaveText("Welcome tester1@test.com");
}

export async function logoutDemoBlaze(page: Page)   {
    await page.click("#logout2");
}
