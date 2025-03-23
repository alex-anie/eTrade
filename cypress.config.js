import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task.js';
import useBabelrc from '@cypress/code-coverage/use-babelrc.js';

export default defineConfig({
  e2e: {
    "baseUrl": "http://localhost:8081",
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      on('file:preprocessor', useBabelrc);
      return config;
    },
  },
});
