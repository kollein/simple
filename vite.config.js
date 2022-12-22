export default {
  server: {
    port: 8080,
  },
  build: {
    lib: {
      entry: './src/main.js',
      name: 'simple',
      formats: ['umd'],
    },
  },
};
