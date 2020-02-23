import { BeforeAll, Before, After, Status } from "cucumber";
import { browser } from "protractor";
import { CalculatorPage } from "../page_objects/calculator.po";

let featureTagName: string;
let objCalculatorPage: CalculatorPage;

BeforeAll(async () => {
  browser.manage().window().maximize();
});

Before(async (scenario) => {
  // Restart the browser when Feature Name has changed.
  if (featureTagName != undefined && featureTagName !== scenario.pickle.tags[0].name) {
    objCalculatorPage = new CalculatorPage();

    await objCalculatorPage.navigateTo();
  }

  // Assign Feature Name
  featureTagName = scenario.pickle.tags[0].name;

  // This will only execute for @Test2 tag
  if (scenario.pickle.tags.length >= 2 && scenario.pickle.tags[1].name === "@Test2") {
    browser.executeScript(`
        let objHeader = document.getElementsByTagName("h3")[0]; 
        objHeader.textContent=objHeader.textContent + " - " + "${scenario.pickle.tags[1].name}"; 
        objHeader.style = "color:red";`
    );
  }
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    //Code to take screesnhot
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");
  }
});