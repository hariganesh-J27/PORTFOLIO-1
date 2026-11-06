import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Every page must be listed here, or it is left out of dist (and 404s on Vercel).
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        credentials: resolve(__dirname, 'credentials.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
})
