import {test, expect} from "@playwright/test"

test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/');
    //await page.locator("id=login2").click() //property
    await page.click("id=login2");
    await page.fill("#loginusername", 'tester1@test.com');
    await page.fill("#loginpassword", 'password@1234');
    await page.click("//button[text()='Log in']");
    //await page.getByRole('button', {type: 'submit'}).click();
    
    

    //locate mutliple
    const elements = await page.$$("//div[@id='tbodyid']//h4//a");
    console.log("No of products found: " + elements.length);
    expect.soft(elements.length).toEqual(9); //soft assert
    for (const element of elements)
    {
        const textthis = await element.textContent();
        console.log("product: " + textthis);    
    }
    const logoutlink = await page.locator("//a[text()='Log out']");
    await expect(logoutlink).toBeVisible();
    await page.close();
})