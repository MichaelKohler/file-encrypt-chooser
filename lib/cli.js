#!/usr/bin/env node
'use strict';

const debug = require('debug')('FileEncryptChooser:CLI');
const meow = require('meow');
const config = require('../config.json');
const FileEncryptChooser = require('./FileEncryptChooser');

const cli = meow({
    help: `
      Usage
        $ file-encrypt-chooser <options>

      Options
        -n, --no-cleanup                # does not delete files after encrypting them

      Examples
        $ file-encrypt-chooser          # starts the wizard without any specific input
        $ DEBUG=* file-encrypt-chooser  # get full debug logs
    `},
    {
        alias: {
            n: 'no-cleanup'
        },
        boolean: [
            'no-cleanup'
        ]
    });

debug('CLI flags', cli.flags);

const options = Object.assign(config, {
    cleanup: cli.flags.cleanup === undefined
});

debug('CLI options', options);

const fileEncryptChooser = new FileEncryptChooser(options);
fileEncryptChooser.start()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
