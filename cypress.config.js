const { defineConfig } = require("cypress");

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
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
