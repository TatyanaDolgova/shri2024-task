import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import purgeCss from 'vite-plugin-purgecss';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    purgeCss(), ,
    createHtmlPlugin({
      minify: true
    })
  ],
});
