# file-encrypt-chooser
This npm package lets you choose which files to encrypt from a predefined folder and encrypts them with the public key.

## Configuration

First you will need to define several paths to other files. For this you need to create a config file.

```
$ cp config-sample.json config.json
```

The ```config.json``` script holds the configuration values. Please adapt it to your needs.

## Run the API
Now you can continue with your installation.

```
$ npm install
$ npm link
```

Now you can run the script by executing

```
$ file-encrypt-chooser
```

from anywhere. It doesn't matter which folder this was started in, as it always takes the configuration values for the paths.