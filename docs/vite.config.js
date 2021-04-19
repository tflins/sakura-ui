import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, '../packages') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/const.scss";`
      }
    }
  }
})
