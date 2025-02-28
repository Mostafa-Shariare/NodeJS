# Express.js POST Request Example

This project demonstrates how to handle POST requests with JSON and Form Data in an Express.js server.

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation
Clone this repository and install dependencies:

```sh
npm install
```

### 3. Run the Server
Start the Express server:

```sh
node server.js
```

The server will run on `http://localhost:3000`.

---

## 📌 Features
- Accepts **JSON** and **form-urlencoded** data.
- Uses built-in Express middleware to parse request bodies.
- Sends responses with received data.

---

## 📜 API Endpoints

### 1️⃣ POST `/json-data`
- Accepts JSON data.
- Example Request:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- Example Response:
  ```json
  {
    "message": "JSON data received successfully",
    "receivedData": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

### 2️⃣ POST `/form-data`
- Accepts form-urlencoded data.
- Example Request (x-www-form-urlencoded):
  ```sh
  name=John Doe&email=john@example.com
  ```
- Example Response:
  ```json
  {
    "message": "Form data received successfully",
    "receivedData": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

---

## 🔧 Built With
- [Express.js](https://expressjs.com/)

---

## 🛠 How It Works

### Middleware
```js
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data
```

### Handling POST Requests
```js
app.post('/json-data', (req, res) => {
    res.json({ message: 'JSON data received successfully', receivedData: req.body });
});

app.post('/form-data', (req, res) => {
    res.json({ message: 'Form data received successfully', receivedData: req.body });
});
```

---

## 🚀 Sending Requests

### Using `fetch()` in JavaScript
#### JSON Request:
```js
fetch('http://localhost:3000/json-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' })
})
.then(res => res.json())
.then(data => console.log(data));
```

#### Form Data Request:
```js
const formData = new URLSearchParams();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');

fetch('http://localhost:3000/form-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData
})
.then(res => res.json())
.then(data => console.log(data));
```


