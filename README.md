**install instructions:**
-install node js  
-install Visio Studio Code  
-install commandline  
npm init playwright@latest  


**Commandline to run tests:**  
**npx playwright test** ===> all test in test folder headless by default  
**npx playwright test --headed** ==> all test in test foldeer to see the browser action
**npx playwright test <test filename>** ===> just the test filename  
**npx playwright test <test filename> --project=chromium **===> just the test filename on chrome  
**npx playwright test <test filename> --project=chromium --headed --debug **===> just the test filename on chrome, with debug on  
**npx playwright show-report **==> view test run report
