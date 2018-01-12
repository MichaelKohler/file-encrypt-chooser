const debug = require('debug')('FileEncryptChooser:Wizard');

module.exports = class Wizard {
  askQuestions(files) {
    return new Promise((resolve, reject) => {
      debug('I should be asking questions...', files);
      resolve();
    });
  }
};
