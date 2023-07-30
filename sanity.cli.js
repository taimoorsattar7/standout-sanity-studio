// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "8icf7l03",
    dataset: "production",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  graphql: [{
    tag: "default",
    playground: true,
    generation: "gen3",
    nonNullDocumentFields: false,
  }],
  vite: (config) => config,
});