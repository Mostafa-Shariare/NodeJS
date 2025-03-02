# Environment Variables in Node.js Using `.env` File

## 📌 Introduction
A **`.env` file** (environment file) is used to store environment variables in **Node.js** applications. It helps in managing sensitive data like **API keys, database credentials, and configuration settings** without hardcoding them into the source code.

This project demonstrates how to use **dotenv** to manage environment variables effectively in an Express.js application.

---

## 🚀 Why Use a `.env` File?

✅ **Security & Privacy** – Keeps sensitive information (API keys, passwords) out of source code.  
✅ **Configuration Management** – Easily switch between development, testing, and production environments.  
✅ **Portability** – Simplifies deployment across different environments without modifying code.  

---

## 📜 Project Setup

### 1️⃣ Install Dependencies
First, install the `dotenv` package to enable `.env` support:

```sh
npm install dotenv
```

### 2️⃣ Create a `.env` File
In the **root directory** of your project, create a `.env` file and define environment variables:

```env
PORT=5000
DATABASE_URL=mongodb+srv://username:password@cluster0.mongodb.net/mydb
SECRET_KEY=my_super_secret_key
```

### 3️⃣ Load Environment Variables in Your App
In `server.js` or `index.js`, load the `.env` file using `dotenv`:

```js
require('dotenv').config(); // Load .env variables

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/', (req, res) => {
    res.send('Environment Variables Loaded Successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Database URL: ${DATABASE_URL}`);
    console.log(`Secret Key: ${SECRET_KEY}`);
});
```

### 4️⃣ Add `.env` to `.gitignore`
To prevent sensitive information from being exposed, add `.env` to `.gitignore`:

```txt
.env
```

---

## 🔹 Advanced Usage

### ✅ Using Multiple `.env` Files for Different Environments
You can create different environment files:
- `.env.development` – For local development
- `.env.production` – For production deployment

Modify your code to load them dynamically:
```js
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`Running in ${process.env.NODE_ENV} mode`);
```
Run the app with a specific environment:
```sh
NODE_ENV=development node server.js
NODE_ENV=production node server.js
```

### ✅ Accessing `.env` Variables in Other Files
Create a `config.js` file:
```js
require('dotenv').config();
module.exports = {
    port: process.env.PORT,
    dbURL: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY,
};
```
Use it in `server.js`:
```js
const config = require('./config');
console.log(`Server running on port ${config.port}`);
```

---

## 🎯 Conclusion
✅ `.env` files help store and manage environment variables securely.  
✅ **The `dotenv` package** simplifies loading variables into Node.js applications.  
✅ Always **add `.env` to `.gitignore`** to avoid exposing sensitive data.  

Now you can securely manage your app's configuration using **`.env` files**! 🚀
