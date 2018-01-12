const debug = require('debug')('FileEncryptChooser:Collector');

module.exports = class Collector {
  collectAllFiles(path) {
    return new Promise((resolve, reject) => {
      debug('I should be collecting..', path);
      resolve();
    });
  }
};
