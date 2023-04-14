const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let count = 0
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      count += 1
      for (let i = 0; i < arr.length; i++) {
          this.calculateDepth(arr[i])
      }
    }
    return count
  }
}

module.exports = {
  DepthCalculator,
}
