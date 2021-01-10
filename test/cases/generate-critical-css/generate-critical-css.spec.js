const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');
const webpackConfig = require('./webpack.config');
const webpackConfig2 = require('./webpack.config2');
const webpackConfig3 = require('./webpack.config3');
const webpack = require('webpack');

const css1 = `.ass{color:red;padding:5px;margin-top:100px}p{font-family:Roboto}`;
const css2 = `@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype')}`;
const css3 = `.cookie{background-color:red}`;

describe('WebpackCriticalCSSInliner Cases: Generate Critical CSS', () => {

  describe('minimum configuration', () => {
    let html = '';

    before((done) => {
      webpack(webpackConfig, () => {
        html = fs.readFileSync(path.resolve(__dirname, 'index-critical.html'), { encoding: 'utf8' });

        done();
      });
    });

    it('minifyed with google font', function() {

      fs.unlinkSync(path.resolve(__dirname, 'index-critical.html'));

      const css = html.indexOf(css1);
      const googleFont = html.indexOf(css2);

      assert.notStrictEqual(googleFont, -1);
      assert.notStrictEqual(css, -1);
    });

  });

  describe('minimum configuration 2', () => {
    let html = '';

    before((done) => {
      webpack(webpackConfig2, () => {
        html = fs.readFileSync(path.resolve(__dirname, 'index-critical2.html'), { encoding: 'utf8' });

        done();
      });
    });

    it('minifyed without google font', function() {

      fs.unlinkSync(path.resolve(__dirname, 'index-critical2.html'));

      const css = html.indexOf(css1);
      const googleFont = html.indexOf(css2);

      assert.strictEqual(googleFont, -1);
      assert.notStrictEqual(css, -1);
    });

  });

  describe('minimum configuration 3', () => {
    let html = '';

    before((done) => {
      webpack(webpackConfig3, () => {
        html = fs.readFileSync(path.resolve(__dirname, 'index-critical3.html'), { encoding: 'utf8' });

        done();
      });
    });

    it('test whitelist', function() {

      fs.unlinkSync(path.resolve(__dirname, 'index-critical3.html'));

      const css = html.indexOf(css1);
      const googleFont = html.indexOf(css2);
      const cookie = html.indexOf(css3);

      assert.strictEqual(googleFont, -1);
      assert.strictEqual(css, -1);
      assert.notStrictEqual(cookie, -1);
    });
  });
});
