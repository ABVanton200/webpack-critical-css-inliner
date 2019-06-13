# webpack-critical-css-inliner

> It is a webpack plugin that inlines your critical (above-the-fold) CSS using Puppeteer.

**Webpack-critical-css-inliner** uses [critical-css-inliner](https://github.com/ABVanton200/critical-css-inliner) under the hood, so IT IS VERY FAST.

> If you use **ADAPTIVE DESIGN**, webpack-critical-css-inliner is your salvation. It supports both mobile and desktop versions.

## Features

1. Extracting critical (above-the-fold) CSS.
2. Fast inlining that CSS.
3. Make the rest styles lazy-loaded.
4. Handling Google Fonts.
5. Optimize existing styles.

## Installation

```sh
npm install --save-dev webpack-critical-css-inliner

// or

yarn add --dev webpack-critical-css-inliner
```
## Docs

**webpack.config.js**

```js
const WebpackCriticalCSSInliner = require('webpack-critical-css-inliner');

module.exports = {
  plugins: [
    new WebpackCriticalCSSInliner({
      // Your entrypoint
      base: 'dist/',
  
      // HTML source file
      src: 'index.html',
  
      // HTML target file
      target: 'index-critical.html',
  
      // Add Google Fonts to critical CSS
      inlineGoogleFonts: true,
  
      // Minify all styles
      minify: true,
  
      // ignore styles from the following stylesheets
      ignoreStylesheets: [/bootstrap/],
  
      // inline styles with the following CSS rules
      whitelist: /#foo|\.bar/
      
    })    
  ]
}
```

## Example

```js
// webpack.config.js
const WebpackCriticalCSSInliner = require('webpack-critical-css-inliner');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  mode: 'production',

  entry: path.resolve(__dirname, 'src/', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist/'),
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
}
```

## License

MIT license