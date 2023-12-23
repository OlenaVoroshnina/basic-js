const { NotImplementedError } = require("../extensions/index.js");

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
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      // If it's not an array, return 0
      return 0;
    }

    if (arr.length === 0) {
      // If it's an empty array, return 1
      return 1;
    }

    // Calculate the depth for each element in the array recursively
    const depths = arr.map((element) => this.calculateDepth(element));

    // Return the maximum depth + 1 for the current array
    return Math.max(...depths) + 1;
  }
}

module.exports = {
  DepthCalculator,
};
