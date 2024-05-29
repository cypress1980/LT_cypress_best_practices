const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    //testIsolation:false,
    baseUrl:"https://ecommerce-playground.lambdatest.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
