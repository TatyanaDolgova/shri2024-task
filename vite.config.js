import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true
    }),
    compression()
  ],
});
