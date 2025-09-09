const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  "reporter": "cypress-mochawesome-reporter",
    reporterOptions: {
    reportPageTitle: "custom-title",
    embeddedScreenshots: true
  },
  e2e: {
    baseUrl: "https://demoblaze.com/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
