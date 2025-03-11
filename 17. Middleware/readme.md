# Middleware 

Middleware functions are a fundamental concept in Express.js. They provide a powerful mechanism for handling HTTP requests and responses, enabling developers to implement reusable logic across different routes.

## What is Middleware?

Middleware functions in Express.js are functions that have access to the `req` (request) and `res` (response) objects and the `next` function. Middleware can:

- Execute any code.
- Modify the `req` and `res` objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Types of Middleware

1. **Application-Level Middleware**
2. **Router-Level Middleware**
3. **Built-in Middleware**
4. **Error-Handling Middleware**
5. **Third-Party Middleware**

---

## 1. Application-Level Middleware

Application-level middleware binds middleware functions to an Express application instance using `app.use()` or `app.METHOD()`.

### Example: Logging Middleware

```javascript
const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 2. Router-Level Middleware

Router-level middleware works in the same way as application-level middleware but is bound to an instance of `express.Router()`.

### Example: Authentication Middleware

```javascript
const router = express.Router();

// Authentication middleware
router.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send('Forbidden: No authorization header');
    }
    next();
});

router.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
});

app.use('/api', router);
```

---

## 3. Built-in Middleware

Express provides several built-in middleware functions:

- `express.json()` - Parses incoming JSON requests.
- `express.urlencoded({ extended: true })` - Parses URL-encoded data.
- `express.static()` - Serves static files.

### Example: Using Static Files

```javascript
app.use(express.static('public'));
```

If you place an `index.html` file inside the `public/` directory, it will be served automatically.

---

## 4. Error-Handling Middleware

Error-handling middleware has four parameters: `(err, req, res, next)`. It is used to catch and process errors in the app.

### Example: Global Error Handler

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
```

---

## 5. Third-Party Middleware

Express allows the integration of third-party middleware like `morgan`, `cors`, and `helmet`.

### Example: Using `morgan` for Logging

```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### Example: Using `cors` for Cross-Origin Requests

```javascript
const cors = require('cors');
app.use(cors());
```

---

## Middleware Execution Flow

Middleware functions execute sequentially in the order they are defined. Always call `next()` to move to the next middleware in the chain unless you want to end the request-response cycle.

### Example with Multiple Middleware

```javascript
app.use((req, res, next) => {
    console.log('Middleware 1 - Logging');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2 - Request processing');
    req.customData = "Hello from Middleware 2";
    next();
});

app.get('/', (req, res) => {
    res.send(req.customData);
});
```

---



