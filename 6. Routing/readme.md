# Node.js Routing and Nodemon

This project demonstrates basic routing in a Node.js server using the `http` module and file handling with `fs`. It also includes `nodemon` for automatic server restarts during development.

## Features
- Handles basic routing for `/`, `/about`, and `/contact` pages.
- Serves static HTML files from the `views` directory.
- Uses `fs.readFile` to serve requested HTML files.
- Handles unknown routes by serving an error page.
- Uses `nodemon` for development convenience.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for automatic restarts)

## Installation
1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install `nodemon` globally (if not installed):
   ```sh
   npm install -g nodemon
   ```
3. Run the server:
   ```sh
   nodemon server.js
   ```

## Code Overview
### `server.js`
```javascript
const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./views/contact.html");
  } else {
    handleReadFile(404, "./views/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
```

## Routing Explanation
- The `server.js` file creates a simple HTTP server.
- The `handleReadFile` function reads HTML files and sends them as responses.
- The server listens for different URL paths (`/`, `/about`, `/contact`) and serves corresponding files.
- If a user requests an unknown route, an error page is displayed.

## Using Nodemon
`nodemon` watches for file changes and restarts the server automatically.
- Start the server with:
  ```sh
  nodemon server.js
  ```
- Now, any changes in `server.js` will restart the server automatically.

## Directory Structure
```
.
├── views
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── error.html
├── server.js
└── README.md
```

## Conclusion
This project provides a simple way to understand routing in Node.js and use `nodemon` for a smoother development experience. Feel free to extend it by adding more routes and functionalities!

