const Collector = require('./Collector');
const Wizard = require('./Wizard');
const Packer = require('./Packer');
const Encryptor = require('./Encryptor');
const Cleaner = require('./Cleaner');

const collector = new Collector();
const wizard = new Wizard();
const packer = new Packer();
const encryptor = new Encryptor();
const cleaner = new Cleaner();

module.exports = class FileEncryptChooser {
  constructor(options) {
    this.options = options;
  }

  start() {
    this.answers = {};

    return collector.collectAllFiles(this.options.filesPath)
      .then((files) => wizard.askQuestions(files))
      .then((answers) => {
        this.answers = answers;
        packer.packSelectedFiles(answers)
      })
      .then((packedFile) => encryptor.encryptWithKey(this.answers))
      .then((resources) => {
        if (!this.options.cleanup) {
          return Promise.resolve();
        }

        return cleaner.cleanup(resources);
      });
  }
};
