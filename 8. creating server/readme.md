# Express.js Server Setup

This guide explains how to create a simple server using Express.js.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Create a new directory and navigate to it:
   ```sh
   mkdir my-express-server
   cd my-express-server
   ```

2. Initialize a new Node.js project:
   ```sh
   npm init -y
   ```

3. Install Express.js:
   ```sh
   npm install express
   ```

## Creating the Server

Create an `index.js` file and add the following code:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

## Running the Server

To start the server, run:

```sh
node index.js
```

You should see the following output:
```
Example app listening on port 3000
```

## Conclusion

This is a basic Express.js server setup. You can expand it by adding routes, middleware, and other features as needed.

### Useful Links
- [Express.js Documentation](https://expressjs.com/)

