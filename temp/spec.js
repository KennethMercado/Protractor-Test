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
const calculator_po_1 = require("./page_objects/calculator.po");
let objCalculatorPage = new calculator_po_1.CalculatorPage();
let fs = require('fs');
//TODO: Refactor this code.
// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    let stream = fs.createWriteStream(`temp\\${filename}`);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
describe('Protractor Demo App', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield objCalculatorPage.navigateTo();
    }));
    it('should have a title', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield objCalculatorPage.getTitle()).toEqual('Super Calculator');
        yield protractor_1.browser.takeScreenshot().then((png) => {
            writeScreenShot(png, 'exception.png');
        });
    }));
    it('should add one and two', () => __awaiter(void 0, void 0, void 0, function* () {
        yield objCalculatorPage.setFirstNumber(1);
        yield objCalculatorPage.setSecondNumber(2);
        yield objCalculatorPage.goButton_click();
        expect(yield objCalculatorPage.getLatestResult()).toEqual('3');
    }));
    it('should add four and six', () => __awaiter(void 0, void 0, void 0, function* () {
        //Arrange
        // Fill this in.
        yield objCalculatorPage.setFirstNumber(4);
        yield objCalculatorPage.setSecondNumber(6);
        //Act
        yield objCalculatorPage.goButton_click();
        expect(yield objCalculatorPage.getLatestResult()).toEqual('10');
    }));
    it('should read the value from an input', () => __awaiter(void 0, void 0, void 0, function* () {
        yield objCalculatorPage.setFirstNumber(1);
        expect(yield objCalculatorPage.firstNumber.getAttribute('value')).toEqual('1');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUY7QUFFakYsZ0VBQThEO0FBRTlELElBQUksaUJBQWlCLEdBQUcsSUFBSSw4QkFBYyxFQUFFLENBQUM7QUFDN0MsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLDJCQUEyQjtBQUMzQix5Q0FBeUM7QUFDekMsU0FBUyxlQUFlLENBQUMsSUFBWSxFQUFFLFFBQWdCO0lBQ25ELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFdkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUVELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixNQUFNLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFdkUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtRQUNwQyxNQUFNLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxNQUFNLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBQ3JDLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsTUFBTSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0MsS0FBSztRQUNMLE1BQU0saUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7UUFDakQsTUFBTSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMifQ==