"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItaHRtbC1yZXBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2N1Y3VtYmVyLWh0bWwtcmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRWpELElBQUksT0FBTyxHQUFHO0lBQ1YsS0FBSyxFQUFFLFdBQVc7SUFDbEIsUUFBUSxFQUFFLDJCQUEyQjtJQUNyQyxNQUFNLEVBQUUsMkJBQTJCO0lBQ25DLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixZQUFZLEVBQUUsSUFBSTtJQUNsQixRQUFRLEVBQUU7UUFDTixZQUFZLEVBQUUsa0JBQWtCO1FBQ2hDLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsYUFBYSxFQUFFLE9BQU87UUFDdEIsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFVBQVUsRUFBRSxRQUFRO0tBQ3ZCO0NBQ0osQ0FBQztBQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMifQ==