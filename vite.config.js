import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy-policy/index.html', import.meta.url)),
        terms: fileURLToPath(new URL('./terms-of-service/index.html', import.meta.url))
      }
    }
  }
})
