import {test, expect} from "@playwright/test"

test('practise', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator().selectOption();
    //await page.locator("//select[@id='country']").click();
    //await page.locator("//select[@id='country']").selectOption("Canada");
    //await page.locator("//select[@id='country']").selectOption({label:'Canada'});
    //await page.locator("//select[@id='country']").selectOption({value:'Canada'}); 
    //await page.locator("//select[@id='country']").selectOption({index:2});

    //checkdropdown check no of options
    const optionsCount = await page.locator("//select[@id='country']/option").count();
    expect(optionsCount).toEqual(10);

    //check all options
    const options = await page.$$('#country option');
    console.log("Number of options: ", options.length);
    var existsMe = false;
    for(const option of options)
    {   
        const valueoption = await option.textContent();
        console.log("option value: ", valueoption);
        if( valueoption == 'Canada'){
            existsMe = true;
        }
    }
    expect(existsMe).toBeTruthy();

    await page.selectOption('#colors',['Blue', 'Yellow']);
    await page.waitForTimeout(5000);

    const optionsCount2 = page.locator('#colors option');
    expect(optionsCount2).toHaveCount(5);


})