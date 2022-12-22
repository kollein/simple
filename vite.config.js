import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: './src/main.js',
      name: 'simple',
      formats: ['umd'],
    },
  },
}));
