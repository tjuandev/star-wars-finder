import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents() {},
    baseUrl: 'http://localhost:3000',
    testIsolation: false
  }
})
