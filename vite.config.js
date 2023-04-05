import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/* global process */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? /tachibana/ : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
