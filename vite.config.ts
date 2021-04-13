import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, './samples'),
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './packages') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/const.scss";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    })
  ]
})
