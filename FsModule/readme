# File System (fs) Module in Node.js

The **fs** module in Node.js is a built-in module that provides an API to interact with the file system. It allows reading, writing, updating, and deleting files and directories.

## Functions in fs Module

### Asynchronous Functions
These functions are non-blocking and operate asynchronously:

- `writeFile()` – Writes data to a file, replacing the file if it already exists.
- `appendFile()` – Appends data to a file. If the file does not exist, it creates one.
- `readFile()` – Reads the content of a file.
- `rename()` – Renames a file or directory.
- `unlink()` – Deletes a file.
- `exists()` – Checks if a file exists.

### Synchronous Functions
These functions are blocking and execute synchronously:

- `writeFileSync()` – Synchronously writes data to a file.
- `appendFileSync()` – Synchronously appends data to a file.
- `readFileSync()` – Synchronously reads the content of a file.
- `renameSync()` – Synchronously renames a file or directory.
- `unlinkSync()` – Synchronously deletes a file.
- `existsSync()` – Synchronously checks if a file exists.

## Usage Example
Here is a basic example demonstrating file writing and reading using both synchronous and asynchronous methods:

### Asynchronous Example
```javascript
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been written!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
```

### Synchronous Example
```javascript
const fs = require('fs');

fs.writeFileSync('exampleSync.txt', 'Hello, Synchronous Node.js!');
console.log('File has been written synchronously.');

const data = fs.readFileSync('exampleSync.txt', 'utf8');
console.log('File content:', data);
```

## Conclusion
- Use **asynchronous functions** for non-blocking operations, especially in high-performance applications.
- Use **synchronous functions** when blocking execution is acceptable.

For more details, check the [Node.js official documentation](https://nodejs.org/api/fs.html).

