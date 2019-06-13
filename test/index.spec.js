const assert = require('assert');
const WebpackCriticalCSSInliner = require('../src/index');

describe('WebpackCriticalCSSInliner', () => {

  describe('webpack hooks', () => {
    
    it('WebpackCriticalCSSInliner has the required apply method', (done) => {
      let hasRequiredFunction = typeof new WebpackCriticalCSSInliner().apply === 'function';
  
      assert.equal(hasRequiredFunction, true);
      
      done();
    });
  
    it('WebpackCriticalCSSInliner has the required emit method', (done) => {
      let hasRequiredFunction = typeof new WebpackCriticalCSSInliner().emit === 'function';
  
      assert.equal(hasRequiredFunction, true);

      done();
    });    

  });

});