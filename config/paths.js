const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  assets: path.resolve(__dirname, '../src/assets'), // assets files
  build: path.resolve(__dirname, '../dist'), // production build files
  static: path.resolve(__dirname, '../public'), // static files to copy to build folder
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Components': path.resolve(__dirname, '../src/components/'),
      '@Containers': path.resolve(__dirname, 'src/containers/'),
      '@Assets': path.resolve(__dirname, '../src/assets/'),
    },
  },
};
