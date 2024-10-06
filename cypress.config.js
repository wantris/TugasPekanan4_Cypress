const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    specPattern: [
      'cypress/integration/cart.cy.js',
      'cypress/integration/login.cy.js',
      'cypress/integration/products.cy.js',
    ],
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com',
    blockHosts: ["https://events.backtrace.io"],
    setupNodeEvents(on, config) {
    },
  },
});
