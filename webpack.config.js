const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
    module: 'empty'
  },
  optimization: {
    minimize: false
  },
};
