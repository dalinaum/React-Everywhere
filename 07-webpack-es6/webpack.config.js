var webpack = require('webpack');

module.exports = {
  entry: './hello.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'hello.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
