## 🧠 What is Express Validator?

**Express-validator** is a set of Express.js middlewares that wraps around **validator.js**, a library for string validations. It helps us **validate** and **sanitize** input data from users (like from forms or APIs) before we process it.

Perfect for preventing things like:
- Empty fields
- Invalid emails
- Too-short passwords
- Malicious inputs (e.g., `<script>` tags)

---

## 🛠️ Installation

```bash
npm install express-validator
```

---

## 🚀 Basic Setup

Let’s start with a simple Express server where a user submits a registration form.

### 🗂️ File: `server.js`

```js
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); // to parse JSON body

// Registration endpoint
app.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('User registered successfully!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

## 🧪 How It Works

When you POST this body:

```json
{
  "username": "",
  "email": "invalidEmail",
  "password": "123"
}
```

You'll get a response like:

```json
{
  "errors": [
    {
      "msg": "Username is required",
      "param": "username",
      "location": "body"
    },
    {
      "msg": "Enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

---

## ✨ More Validation Examples

### ✅ Custom Validator

```js
body('confirmPassword').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Passwords do not match');
  }
  return true;
})
```

### 🔒 Sanitization

```js
body('email').normalizeEmail(),
body('username').trim().escape()
```

### 📦 Combined Example

```js
app.post('/signup', [
  body('email').isEmail().normalizeEmail(),
  body('username').trim().notEmpty().escape(),
  body('password').isLength({ min: 6 }),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Signup successful!');
});
```

---

