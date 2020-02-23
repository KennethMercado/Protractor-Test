import * as  reporter from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'temp/cucumber_report.json',
    output: 'temp/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    storeScreenshots: true,

    // Provide Enironment Information
    brandTitle: "Calculator",
    name: "QA Enironment",
    metadata: {
        "App Version": "1.0",
        "Test Environment": "QA",
        "Browser": "Chrome Version 80.0.3987.116",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local Only"
    }
};

export class ReportGenerator {
    static generateReport(): void {
        reporter.generate(options);
    }
}