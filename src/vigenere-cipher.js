const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];

    for (let i = 0, j = 0; i < message.length; i += 1) {
      const char = message[i];

      if (char >= "A" && char <= "Z") {
        const messageCharCode = char.charCodeAt(0) - "A".charCodeAt(0);
        const keyCharCode =
          key[j % key.length].charCodeAt(0) - "A".charCodeAt(0);
        const encryptedCharCode =
          ((messageCharCode + keyCharCode) % 26) + "A".charCodeAt(0);
        result.push(String.fromCharCode(encryptedCharCode));
        j += 1;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const result = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i += 1) {
      const char = encryptedMessage[i];

      if (char >= "A" && char <= "Z") {
        const encryptedCharCode = char.charCodeAt(0) - "A".charCodeAt(0);
        const keyCharCode =
          key[j % key.length].charCodeAt(0) - "A".charCodeAt(0);
        const messageCharCode =
          ((encryptedCharCode - keyCharCode + 26) % 26) + "A".charCodeAt(0);
        result.push(String.fromCharCode(messageCharCode));
        j += 1;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
