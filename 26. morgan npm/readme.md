### 📦 What is `morgan`?

`morgan` is an **HTTP request logger middleware** for **Node.js**. It’s often used with **Express.js** to log incoming requests to your server.

Think of it as a CCTV camera 🧠 for your backend — every time someone hits your API (GET, POST, etc.), `morgan` logs that request with useful details like:

- Method (`GET`, `POST`, etc.)
- URL
- Response status (`200`, `404`, etc.)
- Time taken to respond

---

### 🛠️ How to install?

```bash
npm install morgan
```

---

### 🤖 How to use?

Here’s a basic Express app with `morgan`:

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan middleware
app.use(morgan('dev')); // 'dev' is a predefined format

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

When you run this and visit `http://localhost:3000/`, you’ll see something like:

```
GET / 200 5.492 ms - 13
```

---

### 📋 Morgan Logging Formats

You can choose how logs are shown:

- `'dev'` – concise and colored (great for development)
- `'tiny'` – minimal logging
- `'combined'` – Apache-like standard logs (good for production)
- `'common'` – similar to `combined` but without referrer and user-agent

You can also make **custom formats** like this:

```js
morgan(':method :url :status :res[content-length] - :response-time ms')
```

---

### 🧠 Why use `morgan`?

- Helps during **debugging** by seeing real-time requests
- Useful for **analytics** (what routes are used the most)
- Can be paired with **log files** for long-term tracking

---

### 📁 Saving logs to a file

```js
const fs = require('fs');
const path = require('path');

// create a write stream
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' } // 'a' means append
);

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
```

---
