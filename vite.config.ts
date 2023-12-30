import path from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shadcn': path.resolve(__dirname, './src/shared/shadcn'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@lib': path.resolve(__dirname, './src/shared/lib'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@typings': path.resolve(__dirname, './src/shared/typings'),
    },
  },
})
