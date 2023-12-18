const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const parts = email.split('@');
  const lastPart = parts.pop();
  const domain = lastPart.replace(/.*@/, ''); // Remove any consecutive '@' symbols

  return domain;
}

module.exports = {
  getEmailDomain
};
