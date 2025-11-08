const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count += 1;
      return (count += Math.max(0, ...arr.map((item) => this.calculateDepth(item))));
    }

    return 0;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
