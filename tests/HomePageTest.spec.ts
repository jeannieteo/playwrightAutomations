import { expect } from "@playwright/test"
import { test } from "@playwright/test"
//{test, expect} = require('@playwright/test')
test(
    'Home Page',async ({page}) => { //async is mandatory, JS is async programming lang.
        await page.goto('https://demoblaze.com/');  //await till page loaded then next line will execute
        const pageTitle = await page.title();
        const pageURL = page.url();
        console.log('Page title is: ', pageTitle);
        console.log('Page URL is: ', pageURL);
        await expect(page).toHaveTitle('STORE');
        await expect(page).toHaveURL('https://demoblaze.com/');
        await page.close();

    }

)