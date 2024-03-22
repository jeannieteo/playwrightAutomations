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

});

test('practiseMulti', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //page.locator('#colors option').scroll_into_view_if_needed()
    const optionsCount2 = await page.locator('#colors option').count();
    //console.log("Number of options: ", optionsCount2.length);
    expect(optionsCount2).toEqual(5);

    await page.selectOption('#colors',['Blue', 'Yellow']);
    await page.waitForTimeout(5000);
    
    const colorAvail = await page.locator('#colors').textContent();
    console.log("colorOptions: ", colorAvail);

    //const colorOptions = await page.locator('#colors option').textContent();
    //console.log("colorOption options: ", colorOptions);

    await expect.soft(colorAvail).toContain('Blue'); //only check presense of that value in the dropdown
    
    await page.waitForTimeout(1000);
})