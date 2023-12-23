const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (!arr.length) return [];
  const result = [];
  arr.forEach((elem, index, arr) => {
    if (arr[index - 1] === "--discard-next") {
      result.push(undefined);
    } else {
      switch (elem) {
        case "--double-prev":
          result.push(result.at(-1));
          break;
        case "--double-next":
          result.push(arr[index + 1]);
          break;
        case "--discard-prev":
          result.pop();
          break;

        case "--discard-next":
          result.push(undefined);
          break;

        default:
          result.push(elem);
      }
    }
  });
  return result.filter((el) => el !== undefined);
}

module.exports = {
  transform,
};
