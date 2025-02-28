# HTTP Requests in Detail

## Overview
An HTTP request is a message sent by a client to a server to request a resource or perform an action. It consists of various components, including:

- **HTTP Method**: Defines the action (e.g., `GET`, `POST`, `PUT`, `DELETE`).
- **URL (Uniform Resource Locator)**: The address of the requested resource.
- **Headers**: Metadata providing additional details (e.g., authentication, content type).
- **Body** (for methods like `POST`, `PUT`): Contains data sent to the server.

---

## 1. Example of an HTTP GET Request
```http
GET /users?id=123&name=John HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

- **Method**: `GET`
- **Path**: `/users`
- **Query Parameters**: `id=123`, `name=John`
- **Headers**:
  - `Host: example.com`
  - `User-Agent: Mozilla/5.0`
  - `Accept: application/json`

### URL Example:
```
https://example.com/users?id=123&name=John
```
This requests user data with `id=123` and `name=John`.

---

## 2. HTTP Request Components
### (i) Query Parameters
- Used in `GET` requests to send additional data.
- Appears after `?` in the URL.
- Multiple parameters are separated by `&`.

#### Example URL:
```
https://example.com/search?q=JavaScript&sort=latest
```
- `q=JavaScript` → Search keyword.
- `sort=latest` → Sorting order.

#### Express.js Code Handling Query Params:
```javascript
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const query = req.query.q;
    const sort = req.query.sort;
    res.send(`Searching for ${query}, sorted by ${sort}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```
**Test in Browser:**
```
http://localhost:3000/search?q=JavaScript&sort=latest
```

---

### (ii) Route Parameters
- Used in RESTful APIs where variables are part of the URL.
- Defined using `:` in Express.js.

#### Example URL:
```
https://example.com/users/123
```
- `123` is a **route parameter** (user ID).

#### Express.js Code Handling Route Params:
```javascript
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
```
**Test in Browser:**
```
http://localhost:3000/users/123
```
Response: `"User ID: 123"`

---

### (iii) Headers in HTTP Requests
- Provides metadata like authentication tokens, content type, etc.
- Sent as key-value pairs.

#### Example Headers:
```http
Authorization: Bearer token123
Content-Type: application/json
User-Agent: PostmanRuntime/7.26.8
```

#### Express.js Code Handling Headers:
```javascript
app.get('/profile', (req, res) => {
    const authHeader = req.headers.authorization;
    res.send(`Authorization Header: ${authHeader}`);
});
```
**Test with cURL:**
```sh
curl -H "Authorization: Bearer token123" http://localhost:3000/profile
```
Response:
```
Authorization Header: Bearer token123
```

---

## 3. POST Request Example (With Body)
Unlike `GET`, `POST` sends data in the request **body**.

#### Example URL:
```
https://example.com/login
```

#### Example HTTP Request:
```http
POST /login HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer token123

{
    "username": "john_doe",
    "password": "securepass"
}
```

#### Express.js Code Handling POST Request:
```javascript
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Login attempt: ${username}`);
});
```

**Test with cURL:**
```sh
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"john_doe","password":"securepass"}'
```

Response:
```
Login attempt: john_doe
```

---

## Summary
| Component | Example |
|-----------|---------|
| **Query Parameters** | `?id=123&sort=desc` |
| **Route Parameters** | `/users/:id` (e.g., `/users/123`) |
| **Headers** | `Authorization: Bearer token123` |
| **Request Body** (for POST) | `{ "username": "john_doe" }` |


