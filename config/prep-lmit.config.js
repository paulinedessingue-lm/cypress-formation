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
  projectId: 'yt698h',
  e2e: {
    env: 'prep',
    bu: 'lmit',
    baseUrl: 'https://prep-www.leroymerlin.it/',

    setupNodeEvents(on, config) {
      config.specPattern = getIntegrationFolder(config.env.folder);
      return config;
    },
  },
});
