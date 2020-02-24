import { Config, browser } from 'protractor';
import { ReportGenerator } from './cucumber-html-reporter';

export let config: Config = {
    SELENIUM_PROMISE_MANAGER: false,

    // Use for Chrome Settings Only
    // Usage: Uncomment the settings below and execute.
    // npm run chrome-e2e
    // directConnect: true,
    // capabilities: {
    //     'browserName': 'chrome',

    //     // Usage: Uncomment the line below to run testing in the background
    //     // chromeOptions: {
    //     //     args: ['--headless', '--disable-gpu']
    //     // }
    // },

    // Use IE Settings Only
    // Usage: Uncomment the settings below and execute.
    // npm run ie-e2e
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'internet explorer',
        //'browserName': 'MicrosoftEdge',
        'ignoreProtectedModeSettings': true,
        'platform': 'ANY',
        'version': '11',
        args: ['--silent', '--no-sandbox', '--test-type=browser', '--lang=US', '--start-maximized'], //,'--headless', '--disable-gpu' 
        prefs: {
            'download': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'extensions_to_open': '',
                'default_directory': process.cwd() + '/downloads/'
            },
        }
    },

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // require feature files
    specs: [
        '../features/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            './step_definitions/*.js' // accepts a glob
        ],
        // To run specific scope
        //tags: '@Feature1',
        //tags: '@Test1',
        //tags: '@Test1 or @Test2',
        format: 'json:./temp/cucumber_report.json'
    },

    onPrepare: async () => {
        await browser.driver.get('http://juliemr.github.io/protractor-demo/');

        browser.executeScript(`
            let focusable = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            
            for (let i = 0; i < focusable.length; i++) {
                focusable[i].addEventListener("focus", function () {
                    this.style.border = "3px solid red";  
                });
                focusable[i].addEventListener("blur", function () {
                    this.style.border = "";  
                });
            }
        `);

        return await browser.driver.wait(async () => {
            const url = await browser.driver.getCurrentUrl();
            return /protractor-demo/.test(url);
        }, 10000);
    },

    onComplete: async () => {
        ReportGenerator.generateReport();
    }

}
