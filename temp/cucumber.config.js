"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
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
        //tags: '@Test1 or @Test2'
        //tags: '@Test2'
        format: 'json:./temp/cucumber_report.json'
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.driver.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.browser.executeScript(`
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
        return yield protractor_1.browser.driver.wait(() => __awaiter(void 0, void 0, void 0, function* () {
            const url = yield protractor_1.browser.driver.getCurrentUrl();
            return /protractor-demo/.test(url);
        }), 10000);
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZDO0FBRWxDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLHdCQUF3QixFQUFFLEtBQUs7SUFFL0IsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNWLGFBQWEsRUFBRSxRQUFRO0tBQzFCO0lBRUQsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBRW5CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFO1FBQ0gsdUJBQXVCLENBQUMsaUJBQWlCO0tBQzVDO0lBRUQsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNMLHlCQUF5QixDQUFDLGlCQUFpQjtTQUM5QztRQUNELHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsZ0JBQWdCO1FBQ2hCLE1BQU0sRUFBRSxrQ0FBa0M7S0FDN0M7SUFFRCxTQUFTLEVBQUUsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFFdEUsb0JBQU8sQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7Ozs7O1NBV3JCLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO1lBQ3hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakQsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFBLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUE7Q0FFSixDQUFBIn0=