const { NotImplementedError } = require("../extensions/index.js");

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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  // Initialize the result matrix with zeros
  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
  }

  // Helper function to check if a cell is within bounds and has a mine
  const hasMine = (row, col) => {
    return row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col];
  };

  // Iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check neighboring cells for mines
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (hasMine(x, y) && !(x === i && y === j)) {
            // Increment the count for neighboring mines
            result[i][j]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
