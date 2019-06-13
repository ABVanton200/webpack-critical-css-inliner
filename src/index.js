const criticalCSSInliner = require('critical-css-inliner');

class WebpackCriticalCSSInliner {

  constructor(options) {
    this.options = options;
  }

  emit(compilation, callback) {
    criticalCSSInliner(this.options)
      .then(() => callback());
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync('WebpackCriticalCSSInliner', (compilation, callback) => {
      this.emit(compilation, callback);
    });
  }
  
}

module.exports = WebpackCriticalCSSInliner;