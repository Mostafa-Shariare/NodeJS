# OS and Path Modules in Node.js

## Overview
Node.js provides built-in modules to interact with the operating system and handle file paths efficiently. Two of the commonly used modules are:

- **OS Module (`os`)**: Provides system-related utility functions.
- **Path Module (`path`)**: Helps in working with file and directory paths.

## OS Module
The `os` module in Node.js allows developers to retrieve information about the operating system. Here are some key functions:

### Example Code
```javascript
const os = require("os");

console.log(os.userInfo());  // Returns information about the current user
console.log(os.homedir());   // Returns the home directory of the current user
console.log(os.hostname());  // Returns the hostname of the OS
console.log(os.platform());  // Returns the platform (e.g., 'win32', 'linux')
console.log(os.totalmem());  // Returns total system memory in bytes
console.log(os.freemem());   // Returns free system memory in bytes
console.log(os.arch());      // Returns the CPU architecture
```

## Path Module
The `path` module provides utilities for working with file and directory paths. Here are some key functions:

### Example Code
```javascript
const path = require("path");

const extensionName = path.extname("index.html");
console.log(extensionName);  // Returns '.html' (file extension)

const joinName = path.join(__dirname + "/views");
console.log(joinName);  // Joins the current directory with '/views'

const joinName2 = path.join(__dirname + "/../views");
console.log(joinName2);  // Joins parent directory with '/views'
```

## Conclusion
- The `os` module provides system-related information such as memory, user details, and architecture.
- The `path` module is useful for handling and manipulating file paths.
- Both modules are essential for building cross-platform applications in Node.js.

For more details, refer to the official [Node.js documentation](https://nodejs.org/api/os.html) for OS and [Node.js Path documentation](https://nodejs.org/api/path.html).

