# Express.js Form Handling

This project demonstrates how to send and receive form data using **Express.js**. It includes an HTML form where users can enter their name and age, which is then processed by the server and displayed as a response.

## 🚀 Features
- Serves an HTML registration form
- Handles `POST` requests to process form data
- Parses form data using `body-parser`
- Sends a response displaying user input

## 📂 Project Structure
```
├── index.html       # Frontend form
├── app.js           # Express server
├── package.json     # Project dependencies
└── README.md        # Documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/express-form-handling.git
   cd express-form-handling
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the server**
   ```sh
   node app.js
   ```

4. **Open the form in your browser**
   ```
   http://localhost:3001/register
   ```

## 📜 Code Overview

### **1️⃣ Server Setup (app.js)**
```javascript
const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2>Your name is ${fullName} and age is ${age}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### **2️⃣ Frontend Form (index.html)**
```html
<form action="/register" method="POST">
  <label for="fullName">Full Name:</label>
  <input type="text" name="fullName" id="fullName" />
  <br />
  <label for="age">Age:</label>
  <input type="text" name="age" id="age" />
  <br />
  <button type="submit">Register</button>
</form>
```

## 📝 Usage Guide
1. Open `http://localhost:3001/register` in a browser.
2. Fill in the form with your name and age.
3. Click **Register**, and the server will display the submitted data.



