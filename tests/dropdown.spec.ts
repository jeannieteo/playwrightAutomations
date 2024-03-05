import {test, expect} from '@playwright/test'

test('dropdown', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await page.locator("#country").selectOption("Australia");
    
    const textthis = await page.locator("#select2-country-container").textContent();
    console.log(textthis);
    expect(textthis == "Australia");
    
})

//
test('dropdown2', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await page.selectOption("//select[contains(@class,'basic-multiple')]",[{value: "TX"},{label:"Utah"}])
    
    var textthis = await page.locator("//span[@class='selection']").nth(1).textContent();
    console.log(textthis);
    //expect(textthis == "Australia");
    
})