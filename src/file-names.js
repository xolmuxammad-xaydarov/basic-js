const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    if (arr.includes(names[i])) {
      arr.push(generator(names, i, arr, 1));
    } else {
      arr.push(names[i]);
    }
  }
  function generator(array, numb, res, num = 1) {
    let a = array[numb] + '(' + num + ')';
    if (res.includes(a)) {
      return generator(array, numb, res, num + 1);
    } else {
      return a;
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};
