# My Node.js Project

## Introduction
This project demonstrates how to set up a Node.js project, initialize `package.json`, and install external modules using npm. As an example, we will install and use the `random-fruits-name` package.

## Setting Up a Node.js Project

### 1. Initialize a New Node.js Project
To start a new project, open your terminal and run:
```sh
npm init
```
This command will prompt you to enter details about your project and create a `package.json` file.

Alternatively, you can use the `-y` flag to accept default settings:
```sh
npm init -y
```

### 2. Understanding `package.json`
The `package.json` file is created in your project directory and contains metadata about your project, including dependencies, scripts, and configuration settings. Example:
```json
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {}
}
```

## Installing External Modules

To add external modules to your project, use the `npm install` command.

For example, to install the `random-fruits-name` package, run:
```sh
npm i random-fruits-name
```
This will add `random-fruits-name` as a dependency in `package.json` and create a `node_modules` folder.

## Using `random-fruits-name`
Once installed, you can use the package in your Node.js script:

```js
const randomFruit = require('random-fruits-name');

console.log("Random Fruit: " + randomFruit());
```

Run your script using:
```sh
node index.js
```

## Conclusion
This README covers the basics of setting up a Node.js project, initializing `package.json`, installing external modules, and using the `random-fruits-name` package. Happy coding!



