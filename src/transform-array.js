const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr);
  const result = [];

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr.length - 1 !== i) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[0] !== '--double-prev') {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-prev') {
      if (arr[0] !== '--discard-prev') {
        result.pop();
      }
    } else if (arr[i] === '--discard-next') {
      if (arr[arr.length - 1] !== '--discard-next') {
        i += 2;
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
