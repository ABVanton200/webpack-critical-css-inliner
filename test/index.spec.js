const assert = require('assert').strict;
const WebpackCriticalCSSInliner = require('../src/index');

describe('WebpackCriticalCSSInliner', () => {

  describe('webpack hooks', () => {

    it('WebpackCriticalCSSInliner has the required apply method', (done) => {
      let hasRequiredFunction = typeof new WebpackCriticalCSSInliner().apply === 'function';

      assert.strictEqual(hasRequiredFunction, true);

      done();
    });

    it('WebpackCriticalCSSInliner has the required emit method', (done) => {
      let hasRequiredFunction = typeof new WebpackCriticalCSSInliner().emit === 'function';

      assert.strictEqual(hasRequiredFunction, true);

      done();
    });

  });

});
