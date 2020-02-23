import { Given, When, Then } from "cucumber";
import { CalculatorPage } from "../page_objects/calculator.po";
import chai from "chai";

let expect = chai.expect;
let objCalculatorPage: CalculatorPage;

Given('I have a calculator', function () {
    objCalculatorPage = new CalculatorPage();
});

When('I add {int} and {int}', async (firstNumber: number, secondNumber: number) => {
    await objCalculatorPage.setFirstNumber(firstNumber);
    await objCalculatorPage.setSecondNumber(secondNumber);
});

Then('the result should be {int}', async (total: number) => {
    await objCalculatorPage.goButton_click();

    expect(await objCalculatorPage.getLatestResult()).to.equal(total.toString());
});


// The example below uses hash table as data input.
// interface IGiven {
//     FirstNumber: number;
//     SecondNumber: number;
// }

// interface IWhen {
//     Operation: string;
// }

// interface IAnswer {
//     Answer: number;
// }

// let objGiven: Array<IGiven>;
// let objWhen: Array<IWhen>;
// let objAnswer: Array<IWhen>;

// Given('the below values.', function (dataTable) {
//     objGiven = dataTable.hashes();
// });

// When('the following operations is performed.', function (dataTable) {
//     objWhen = dataTable.hashes();
// });

// Then('the answer is correct.', function (dataTable) {
//     objAnswer = dataTable.hashes();
// });