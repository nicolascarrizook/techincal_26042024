import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'https://api.spacex.land/graphql/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, '')
      }
    }
  }
})
