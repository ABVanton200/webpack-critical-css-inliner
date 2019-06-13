const WebpackCriticalCSSInliner = require('../../../src/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  mode: 'production',
  
  entry: path.resolve(__dirname, 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin(),

    new MiniCssExtractPlugin(),
    
    new WebpackCriticalCSSInliner({
      base: './test/cases/generate-critical-css',
      src: 'index.html',
      target: 'index-critical.html',
      inlineGoogleFonts: true,
      minify: true,
      ignoreStylesheets: [/bootstrap/],
      whitelist: /#foo|\.bar/
    })
  ]
};