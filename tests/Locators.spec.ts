import {test, expect} from "@playwright/test"
import { loginDemoBlaze, logoutDemoBlaze } from "./helper";

test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/');
    await loginDemoBlaze(page);
    
    //locate mutltiple
    const elements = await page.$$("//div[@id='tbodyid']//h4//a");
    console.log("No of products found: " + elements.length);
    expect.soft(elements.length).toEqual(9); //soft assert
    for (const element of elements)
    {
        const textthis = await element.textContent();
        console.log("product: " + textthis);    
    }
    await logoutDemoBlaze(page);

    await page.close();
})
