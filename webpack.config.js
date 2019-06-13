const WebpackCriticalCSSInliner = require('./src/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'build');

module.exports = {

  mode: 'production',

  entry: {
    index: './test/cases/generate-critical-css/index.js'
  },

  output: {
    path: OUTPUT_DIR,
    filename: 'webpack-critical-css-inliner.[contenthash].js'
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
      base: 'dist/',
      src: 'index.html',
      target: 'index-critical.html',
      inlineGoogleFonts: true,
      minify: true,
      ignoreStylesheets: [/bootstrap/],
      whitelist: /#foo|\.bar/
    })
  ]
};