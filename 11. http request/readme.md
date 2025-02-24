# HTTP Responses Explained

## Overview
An HTTP response is what a server sends back to a client (usually a web browser or API consumer) after receiving a request. It consists of multiple components, such as status codes, headers, body content, and cookies.

---

## Components of an HTTP Response

### 1. **Body Content**
The body of an HTTP response contains the actual data being sent back. The content can be in different formats:

- **HTML** – Used to send web pages.
- **Text** – Plain text responses.
- **JSON** – Common format for APIs.
- **XML** – Sometimes used in legacy systems.
- **Binary files** – Images, PDFs, or other files.

### 2. **Cookies**
Cookies are small pieces of data stored on the client-side. They are often used for session management and user authentication. The server sets a cookie by sending a `Set-Cookie` header in the response.

Example header for setting a cookie:
```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure
```

### 3. **Headers**
Headers provide metadata about the response. Some common response headers include:

- `Content-Type`: Specifies the media type (e.g., `text/html`, `application/json`).
- `Set-Cookie`: Sends a cookie to the client.
- `Cache-Control`: Determines caching behavior.
- `Access-Control-Allow-Origin`: Controls Cross-Origin Resource Sharing (CORS).

Example:
```http
Content-Type: application/json
Cache-Control: no-cache
```

### 4. **Status Codes**
Status codes indicate the result of the request. Here are some common ones:

- **2xx (Success)**:
  - `200 OK`: Request succeeded.
  - `201 Created`: Resource created successfully.

- **3xx (Redirection)**:
  - `301 Moved Permanently`: Resource moved to a new URL.
  - `302 Found`: Temporary redirection.

- **4xx (Client Errors)**:
  - `400 Bad Request`: Invalid request from the client.
  - `401 Unauthorized`: Authentication required.
  - `404 Not Found`: Resource not found.

- **5xx (Server Errors)**:
  - `500 Internal Server Error`: General server issue.
  - `503 Service Unavailable`: Server is temporarily overloaded.

---

## Sending HTTP Responses in Express.js
Express.js makes it easy to send different types of responses.

### 1. Sending HTML Response
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my website</h1>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### 2. Sending JSON Response
```javascript
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, JSON response!' });
});
```

### 3. Sending an HTML File as Response
```javascript
const path = require('path');

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
```

### 4. Setting Cookies in Response
```javascript
app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'JohnDoe', { httpOnly: true, secure: true });
    res.send('Cookie has been set!');
});
```

### 5. Customizing Headers
```javascript
app.get('/custom-header', (req, res) => {
    res.set({ 'X-Custom-Header': 'MyValue' });
    res.send('Custom header sent!');
});
```





