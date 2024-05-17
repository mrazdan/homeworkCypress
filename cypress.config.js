const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: false,
  animationDistanceThreshold: 50,

  e2e: {
    setupNodeEvents(on, config) {
      supportFile: 'cypress/support/e2e.js'
    },
  },
});
