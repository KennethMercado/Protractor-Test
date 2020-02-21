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
class CalculatorPage {
    constructor() {
        this.firstNumber = protractor_1.element(protractor_1.by.model('first'));
        this.secondNumber = protractor_1.element(protractor_1.by.model('second'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.latestResult = protractor_1.element(protractor_1.by.binding('latest'));
    }
    navigateTo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    setFirstNumber(firstNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstNumber.sendKeys(firstNumber);
        });
    }
    setSecondNumber(secondNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.secondNumber.sendKeys(secondNumber);
        });
    }
    goButton_click() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.goButton.click();
        });
    }
    getLatestResult() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.latestResult.getText();
        });
    }
}
exports.CalculatorPage = CalculatorPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2Vfb2JqZWN0cy9jYWxjdWxhdG9yLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBRWpFLE1BQWEsY0FBYztJQU12QjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVLLFVBQVU7O1lBQ1osTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7S0FBQTtJQUVLLFFBQVE7O1lBQ1YsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLFdBQW1COztZQUNwQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxZQUFvQjs7WUFDdEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNoQixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsQ0FBQztLQUFBO0NBQ0o7QUFwQ0Qsd0NBb0NDIn0=