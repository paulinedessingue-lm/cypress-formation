const { defineConfig } = require("cypress");

const getIntegrationFolder = (folder) => {
  switch (folder) {
    case "orders":
      return "cypress/e2e/Orders";
    default:
      return "cypress/e2e";
  }
};


module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://www.leroymerlin.fr/',

    setupNodeEvents(on, config) {
      config.specPattern = getIntegrationFolder(config.env.folder);
      return config;
    },
  },
});
