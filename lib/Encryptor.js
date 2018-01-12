const debug = require('debug')('FileEncryptChooser:Encryptor');

module.exports = class Encryptor {
  encryptWithKey(filePath) {
    return new Promise((resolve, reject) => {
      debug('I should be encrypting..', filePath);
      resolve();
    });
  }
};
