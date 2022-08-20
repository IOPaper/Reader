import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import config from 'src/config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        timeout: 3000
      }
    }
  }
})
