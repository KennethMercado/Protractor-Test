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
const cucumber_1 = require("cucumber");
const calculator_po_1 = require("../page_objects/calculator.po");
const protractor_1 = require("protractor");
let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
let objCalculatorPage = new calculator_po_1.CalculatorPage();
// Synchronous
cucumber_1.BeforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // perform some shared setup
    //await objCalculatorPage.navigateTo();
}));
cucumber_1.Before({ tags: "@Test2" }, ({ sourceLocation, pickle }) => __awaiter(void 0, void 0, void 0, function* () {
    // perform some shared setup
    protractor_1.browser.executeScript(`
        let objHeader = document.getElementsByTagName("h3")[0]; 
        objHeader.textContent=objHeader.textContent + " - " + "${pickle.tags[1].name}"; 
        objHeader.style = "color:blue";`);
}));
cucumber_1.Given('Open the calcultor site', () => __awaiter(void 0, void 0, void 0, function* () {
    debugger;
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield objCalculatorPage.setFirstNumber(string);
    yield objCalculatorPage.setSecondNumber(string2);
}));
cucumber_1.Then('the output is {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield objCalculatorPage.goButton_click();
    expect(yield objCalculatorPage.getLatestResult()).to.equal(string);
}));
//TODO: Check when done
// var world = this;
// browser.takeScreenshot().then((buffer) => {
//         browser.driver.driver
//     return world.attach(buffer, 'image/png');
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBfZGVmaW5pdGlvbnMvY2FsY3VsYXRvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFnRTtBQUNoRSxpRUFBK0Q7QUFDL0QsMkNBQXFDO0FBRXJDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLDhCQUFjLEVBQUUsQ0FBQztBQUU3QyxjQUFjO0FBQ2Qsb0JBQVMsQ0FBQyxHQUFTLEVBQUU7SUFDakIsNEJBQTRCO0lBQzVCLHVDQUF1QztBQUMzQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7SUFDNUQsNEJBQTRCO0lBQzVCLG9CQUFPLENBQUMsYUFBYSxDQUFDOztpRUFFdUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dDQUM1QyxDQUNuQyxDQUFDO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO0lBQ3hDLFFBQVEsQ0FBQztBQUNiLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDdEUsTUFBTSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzVDLE1BQU0saUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBRXBCLDhDQUE4QztBQUM5QyxnQ0FBZ0M7QUFDaEMsZ0RBQWdEO0FBQ2hELEtBQUsifQ==