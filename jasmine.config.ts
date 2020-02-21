import { Config } from 'protractor';

export let config: Config = {
    directConnect: true,
    framework: 'jasmine',
    specs: ['spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
}
