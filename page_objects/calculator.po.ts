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


