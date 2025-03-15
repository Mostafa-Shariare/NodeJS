# Express.js MVC Structure

This project has the same functionality as index.js, but it follows the Model-View-Controller (MVC) architecture. MVC is a design pattern that helps separate concerns, making the application more scalable and maintainable.


## 📌 **Project Structure**
```
/project-root
│── controllers/
│   ├── users.controller.js
│── models/
│   ├── users.model.js
│── routes/
│   ├── users.route.js
│── views/
│   ├── index.html
│── index.js
```

## 🚀 **MVC Architecture Overview**
### 1️⃣ **Model (models/users.model.js)**
- The model represents the data and business logic.
- In this project, `users.model.js` stores an array of users.
- Typically, a database (e.g., MongoDB, MySQL) would replace this array.

```javascript
const users = [
    {
        name: "John",
        email: "zj3Tl@example.com"
    },
    {
        name: "Jane",
        email: "9aB8U@example.com"
    }
];

module.exports = users;
```

### 2️⃣ **View (views/index.html)**
- The view is responsible for the UI.
- Here, `index.html` contains a simple form where users can submit their name and email.
- This is served to the client via the **controller**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/user" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <button type="submit">Register</button>
    </form>
</body>
</html>
```

### 3️⃣ **Controller (controllers/users.controller.js)**
- The controller handles user requests and processes data.
- `getUsers` serves the `index.html` file.
- `saveUser` handles form submissions, saves data to the model, and returns the updated user list.

```javascript
const path = require("path");
const users = require("../models/users.model");

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname, "/../views/index.html"));   
};

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const user = {
        name: name,
        email: email
    };
    users.push(user);
    res.status(201).send(users);
};
```

### 4️⃣ **Routes (routes/users.route.js)**
- Defines API endpoints (`/user` for GET and POST requests).
- Maps routes to the appropriate controller functions.

```javascript
const express = require("express");
const { getUsers, saveUser } = require("../controllers/users.controller");
const router = express.Router();

router.get("/user", getUsers);
router.post("/user", saveUser);

module.exports = router;
```

### 5️⃣ **Entry Point (index.js)**
- Initializes the Express app.
- Uses middleware and loads the routes.
- Starts the server.

```javascript
const express = require("express");
const userRouter = require("./routes/users.route");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

## 🔧 **How to Run the Project**
1. Install dependencies:
   ```sh
   npm install express
   ```
2. Start the server:
   ```sh
   node index.js
   ```
3. Open `http://localhost:3000/user` in a browser to access the form.
4. Submit the form to register a user.

## 🎯 **Advantages of Using MVC**
✅ **Separation of Concerns** – Easier to manage and scale.
✅ **Maintainability** – Code is structured and easy to debug.
✅ **Reusability** – Components can be reused across different parts of the application.




