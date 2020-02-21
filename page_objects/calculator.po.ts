import { ElementFinder, element, by, browser } from "protractor";

export class CalculatorPage {
    firstNumber: ElementFinder;
    secondNumber: ElementFinder;
    goButton: ElementFinder;
    latestResult: ElementFinder;

    constructor() {
        this.firstNumber = element(by.model('first'));
        this.secondNumber = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.latestResult = element(by.binding('latest'));
    }

    async navigateTo(): Promise<void> {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    async getTitle(): Promise<string> {
        return await browser.getTitle();
    }

    async setFirstNumber(firstNumber: number): Promise<void> {
        await this.firstNumber.sendKeys(firstNumber);
    }

    async setSecondNumber(secondNumber: number): Promise<void> {
        await this.secondNumber.sendKeys(secondNumber);
    }

    async goButton_click(): Promise<void> {
        await this.goButton.click();
    }

    async getLatestResult(): Promise<string> {
        return await this.latestResult.getText();
    }
}


