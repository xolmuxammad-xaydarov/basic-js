const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  matrix.forEach((item) => {
    let a = item.map((cell) => 0);
    res.push(a);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (matrix[i - 1] && matrix[i - 1][j] !== undefined) {
          res[i - 1][j]++;
        }

        if (matrix[i - 1] && matrix[i - 1][j - 1] !== undefined) {
          res[i - 1][j - 1]++;
        }
        if (matrix[i - 1] && matrix[i - 1][j + 1] !== undefined) {
          res[i - 1][j + 1]++;
        }

        if (matrix[i + 1] !== undefined) {
          res[i + 1][j]++;
        }

        if (matrix[i + 1] && matrix[i + 1][j + 1] !== undefined) {
          res[i + 1][j + 1]++;
        }

        if (matrix[i] && matrix[i][j + 1] !== undefined) {
          res[i][j + 1]++;
        }

        if (matrix[i] && matrix[i][j - 1] !== undefined) {
          res[i][j - 1]++;
        }
        if (matrix[i + 1] && matrix[i + 1][j - 1] !== undefined) {
          res[i + 1][j - 1]++;
        }
      }
    }
  }
  
  return res;
}

module.exports = {
  minesweeper,
};
