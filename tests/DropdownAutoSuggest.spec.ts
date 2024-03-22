import {test, expect} from '@playwright/test';


test ('journey',async ({page}) => {
    await page.goto("http://journey.smrt.com.sg/");
    const fromDrop = page.locator('#txtFrom');
    await fromDrop.click();
    await fromDrop.press('2');
    await fromDrop.press('3');
    await fromDrop.press('8');
    await fromDrop.press('8');
    //await fromDrop.press('2');

    await page.waitForSelector('#txtFrom-list li');
    const AddressDrops = await page.$$('#txtFrom-list li');
    //await console.log("options generated AddressDrops: ", AddressDrops);
    //#txtFrom-list li

    for (let address of AddressDrops) {
        const getcon = await address.textContent();
        
        if( getcon.includes('ISTANA'))
        {
            await address.click();
            console.log("TO clicked : ",getcon)
            
            break;
        }

    }
    //divTxtFrom
    const divtextFrom = await page.locator('#divTxtFrom').textContent();
    //const inputtextFrom = await page.locator('#TxtFrom').textContent();
    console.log("divtextFrom : ", divtextFrom);
    //console.log("inputtextFrom : ", inputtextFrom);

    const fromDropT = page.locator('#txtTo');
    await fromDropT.click();
    await fromDropT.press('8');
    await fromDropT.press('1');
    await fromDropT.press('9');
    await fromDropT.press('6');
    //await fromDropT.press('4');

    await page.waitForSelector('#txtTo-list li');
    const AddressToDrops = await page.$$('#txtTo-list li');

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