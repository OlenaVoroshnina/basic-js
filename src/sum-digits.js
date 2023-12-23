const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Function to calculate the sum of digits of a number
  const digitSum = (num) =>
    String(num)
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);

  let result = n;

  // Keep summing digits until a one-digit number is obtained
  while (result >= 10) {
    result = digitSum(result);
  }

  return result;
}

module.exports = {
  getSumOfDigits,
};
