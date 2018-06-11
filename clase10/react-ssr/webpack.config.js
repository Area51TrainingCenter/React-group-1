const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const loaders = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
}

const client = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
  },
  module: loaders,
}

const server = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: loaders,
  target: 'node',
  externals: [nodeExternals()],
}

module.exports = [client, server]