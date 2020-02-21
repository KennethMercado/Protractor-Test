import { Given, When, Then, BeforeAll, Before } from "cucumber";
import { CalculatorPage } from "../page_objects/calculator.po";
import { browser } from "protractor";

let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;


let objCalculatorPage = new CalculatorPage();

// Synchronous
BeforeAll(async () => {
    // perform some shared setup
    //await objCalculatorPage.navigateTo();
});

Before({ tags: "@Test2" }, async ({ sourceLocation, pickle }) => {
    // perform some shared setup
    browser.executeScript(`
        let objHeader = document.getElementsByTagName("h3")[0]; 
        objHeader.textContent=objHeader.textContent + " - " + "${pickle.tags[1].name}"; 
        objHeader.style = "color:blue";`
    );

});

Given('Open the calcultor site', async () => {
    debugger;
});

When('I add two numbers {string} and {string}', async (string, string2) => {
    await objCalculatorPage.setFirstNumber(string);
    await objCalculatorPage.setSecondNumber(string2);
});

Then('the output is {string}', async (string) => {
    await objCalculatorPage.goButton_click();

    expect(await objCalculatorPage.getLatestResult()).to.equal(string);
});


//TODO: Check when done
// var world = this;

// browser.takeScreenshot().then((buffer) => {
//         browser.driver.driver
//     return world.attach(buffer, 'image/png');
// };