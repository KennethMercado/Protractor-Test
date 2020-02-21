let reporter = require('cucumber-html-reporter');

let options = {
    theme: 'bootstrap',
    jsonFile: 'temp/cucumber_report.json',
    output: 'temp/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "brandTitle": "Calculator Brand",
        "name": "Calculator Name",
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);