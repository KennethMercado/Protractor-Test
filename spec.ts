import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { CalculatorPage } from './page_objects/calculator.po';

let objCalculatorPage = new CalculatorPage();
let fs = require('fs');

//TODO: Refactor this code.
// abstract writing screen shot to a file
function writeScreenShot(data: string, filename: string) {
    let stream = fs.createWriteStream(`temp\\${filename}`);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('Protractor Demo App', () => {
    beforeEach(async () => {
        await objCalculatorPage.navigateTo();
    });

    it('should have a title', async () => {
        expect(await objCalculatorPage.getTitle()).toEqual('Super Calculator');

        await browser.takeScreenshot().then((png) => {
            writeScreenShot(png, 'exception.png');
        });
    });

    it('should add one and two', async () => {
        await objCalculatorPage.setFirstNumber(1);
        await objCalculatorPage.setSecondNumber(2);

        await objCalculatorPage.goButton_click();

        expect(await objCalculatorPage.getLatestResult()).toEqual('3');
    });

    it('should add four and six', async () => {
        //Arrange
        // Fill this in.
        await objCalculatorPage.setFirstNumber(4);
        await objCalculatorPage.setSecondNumber(6);

        //Act
        await objCalculatorPage.goButton_click();
        expect(await objCalculatorPage.getLatestResult()).toEqual('10');
    });

    it('should read the value from an input', async () => {
        await objCalculatorPage.setFirstNumber(1);
        expect(await objCalculatorPage.firstNumber.getAttribute('value')).toEqual('1');
    });

});
