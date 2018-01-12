const debug = require('debug')('FileEncryptChooser:Packer');

module.exports = class Packer {
  packSelectedFiles(files) {
    return new Promise((resolve, reject) => {
      debug('I should be packing', files);
      resolve();
    });
  }
};
