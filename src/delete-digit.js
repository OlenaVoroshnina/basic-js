const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Convert the number to a string to easily manipulate digits
    const numStr = n.toString();
    
    let maxNumber = 0;

    // Iterate through each digit and try deleting it to find the maximum number
    for (let i = 0; i < numStr.length; i += 1) {
        // Create a new number by excluding the current digit
        const newNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));

        // Update maxNumber if the new number is greater
        maxNumber = Math.max(maxNumber, newNumber);
    }

    return maxNumber;
}


module.exports = {
  deleteDigit
};
