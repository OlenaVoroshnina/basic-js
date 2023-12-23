const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
   // Check if sampleActivity is a string and represents a valid number
  if (typeof sampleActivity !== 'string' || !/^\d+(\.\d+)?$/.test(sampleActivity)) {
    return false;
  }

  // Convert sampleActivity to a floating-point number
  const activity = parseFloat(sampleActivity);

  // Check if the activity is within a valid range
  if (activity <= 0 || activity >= MODERN_ACTIVITY) {
    return false;
  }

  // Calculate the age using the formula
  const age = Math.ceil((Math.log(MODERN_ACTIVITY / activity) / LN2) * HALF_LIFE_PERIOD);

  return age;
}

module.exports = {
  dateSample,
};
