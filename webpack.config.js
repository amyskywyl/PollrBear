const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/pollr_bear.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  devtool: 'source-map'
};