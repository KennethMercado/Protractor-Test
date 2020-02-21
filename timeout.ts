//Reference: https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/timeouts.md
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);