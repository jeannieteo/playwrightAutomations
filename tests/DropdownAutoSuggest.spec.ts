import {test, expect} from '@playwright/test'

test('dropdown', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await page.locator("#country").selectOption("Australia");
    
    const textthis = await page.locator("#select2-country-container").textContent();
    console.log(textthis);
    expect(textthis == "Australia");
    
});


test('dropdown2', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await page.selectOption("//select[contains(@class,'basic-multiple')]",[{value: "TX"},{label:"Utah"}])
    
    var dropdownText;
    dropdownText = await page.locator("//span[@class='selection']").nth(1).textContent();
    expect.soft(dropdownText.includes('Texas')).toBeTruthy;
    expect.soft(dropdownText.includes('Texas')).toBeTruthy;
    

    const checkChoices = await dropdownText.split('x');
    await console.log(checkChoices.length);
    await expect(checkChoices.length).toEqual(2);
    
  
});

test ('journey',async ({page}) => {
    await page.goto("http://journey.smrt.com.sg/");
    const fromDrop = page.locator('#txtFrom');
    await fromDrop.click();
    await fromDrop.press('2');
    await fromDrop.press('3');
    await fromDrop.press('8');
    await fromDrop.press('8');
    //await fromDrop.press('2');

    await page.waitForSelector('#txtFrom_listbox');
    const AddressDrops = await page.$$('#txtFrom_listbox li');
    await console.log("options generated AddressDrops: ", AddressDrops);
    //#txtFrom-list li
    var getcon;
    for (let address of AddressDrops) {
        getcon = await address.textContent();
        
        if( getcon.includes('ISTANA'))
        {
            await address.click();
            console.log("TO clicked : ",getcon)
            
            break;
        }

    }
    //divTxtFrom
    const divtextFrom = await page.locator('#txtFrom').textContent();
    //const inputtextFrom = await page.locator('#TxtFrom').textContent();
    console.log("divtextFrom : ", divtextFrom);
    //console.log("inputtextFrom : ", inputtextFrom);

    const fromDropT = page.locator('#txtTo');
    await fromDropT.click();
    await fromDropT.type('8196');
    // await fromDropT.press('8');
    // await fromDropT.press('1');
    // await fromDropT.press('9');
    // await fromDropT.press('6');
    //await fromDropT.press('4');

    await page.waitForSelector('#txtTo_listbox li');
    const AddressToDrops = await page.$$('#txtTo_listbox li');

    for (let addressT of AddressToDrops) {
        const getconT = await addressT.textContent();
        console.log(getconT)
        if( getconT.includes('TERMINAL 1'))
        {
            await addressT.click();
            console.log("TO clicked : ", getconT)
            break;
        }

    }

    await page.locator('#btnSubmit').click();
    await page.waitForTimeout(5000);

});
