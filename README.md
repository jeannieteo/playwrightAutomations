**install instructions:**
-install node js  
-install Visio Studio Code  
-install commandline  
npm init playwright@latest  


**Commandline to run tests:**
**npx playwright test** ===> all test in test folder headless by default  
**npx playwright test --headed** ==> all test in test foldeer to see the browser action  
**npx playwright test \<test filename\>** ===> just the test filename  
**npx playwright test \<test filename\> --project=chromium** ===> just the test filename on chrome  
**npx playwright test \<test filename\> --project=chromium --headed --debug**===> just the test filename on chrome, with debug on  
**npx playwright show-report**==> view test run report

**Run a set of test files**\
npx playwright test tests/todo-page/ tests/landing-page/

**Run tests at a specific line**\
npx playwright test my-spec.ts:42

**Run tests by title**\
npx playwright test -g "add a todo item"

**Run tests in headed browsers**\
npx playwright test --headed

**Run tests for a specific project**\
npx playwright test --project=chromium

**Get help**\
npx playwright test --help
