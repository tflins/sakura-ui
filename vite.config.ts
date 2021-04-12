import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, './samples'),
  plugins: [
    vue({
      include: [/\.vue$/],
    })
  ],
})
