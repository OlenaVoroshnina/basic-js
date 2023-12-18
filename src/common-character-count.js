const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    // Create objects for counting character frequencies in each string
    const countS1 = {};
    const countS2 = {};

    // Fill the object for the first string
    for (const char of s1) {
        countS1[char] = (countS1[char] || 0) + 1;
    }

    // Fill the object for the second string
    for (const char of s2) {
        countS2[char] = (countS2[char] || 0) + 1;
    }

    // Find common characters and count their occurrences
    let commonCount = 0;
    for (const char in countS1) {
        if (countS2.hasOwnProperty(char)) {
            commonCount += Math.min(countS1[char], countS2[char]);
        }
    }

    return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
