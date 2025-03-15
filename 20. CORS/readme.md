# CORS in Express.js

## 📌 Introduction
Cross-Origin Resource Sharing (CORS) is a security feature in web browsers that blocks unauthorized cross-origin requests. By default, browsers restrict JavaScript from making AJAX calls to different domains. To allow such requests, CORS must be properly configured in the backend.

In this guide, we will learn how to enable and configure CORS in an **Express.js** application.

---

## 🚀 Installation
To enable CORS in your Express.js application, install the `cors` package:

```sh
npm install cors
```

Then, import and use it in your `index.js` or `server.js` file:

```javascript
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
    res.send("CORS is enabled!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

---

## 🎯 Configuring CORS
### ✅ Allow Specific Origins
By default, `cors()` allows requests from any origin. To restrict access, specify the allowed origins:

```javascript
app.use(cors({
    origin: "http://example.com", // Allow only this origin
    methods: ["GET", "POST"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}));
```

### ✅ Handling Preflight Requests
Some HTTP methods (e.g., `PUT`, `DELETE`) and custom headers trigger a **preflight request**. To handle it manually:

```javascript
app.options("*", cors()); // Enable preflight requests for all routes
```

Or, for specific routes:

```javascript
app.options("/user", cors());
```

---

## 🔧 Enabling CORS Without `cors` Package
You can manually set CORS headers:

```javascript
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // Handle preflight request
    }

    next();
});
```

---

## 🔥 When Should You Enable CORS?
- When your **frontend and backend are on different domains** (e.g., React frontend on `http://localhost:3000` and Express API on `http://localhost:5000`).
- When your **backend serves third-party applications**.
- When handling **RESTful APIs** accessed by client-side applications.

---

## 🏆 Benefits of Using CORS
✅ Allows cross-origin API requests
✅ Protects from unauthorized requests
✅ Supports various configurations for security

---


