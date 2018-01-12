const debug = require('debug')('FileEncryptChooser:Cleaner');

module.exports = class Cleaner {
  cleanup(usedResources) {
    return new Promise((resolve, reject) => {
      debug('I should be cleaning..', usedResources);
      resolve();
    });
  }
};
