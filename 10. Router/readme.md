# Express Router and Routing

Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications. One of its key features is **routing**, which allows developers to define how the application responds to different HTTP requests.

## 1. What is Routing in Express?
Routing refers to determining how an application responds to a client request for a specific endpoint (URL) with a specified HTTP method (GET, POST, PUT, DELETE, etc.). Each route can have one or multiple handlers that execute when the route is matched.

### Example of Basic Routing
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

In this example:
- `app.get('/')` handles GET requests to the root (`/`).
- `app.post('/submit')` handles POST requests to `/submit`.

## 2. Express Router
Express **Router** is a built-in middleware that helps in organizing routes in separate files, improving modularity and maintainability.

### 2.1 Why Use Express Router?
- Keeps the main application file clean and modular.
- Helps group related routes.
- Enables middleware usage specific to a set of routes.

### 2.2 Implementing Express Router
#### Step 1: Create a Router Module
Create a new file named `userRoutes.js`:

```javascript
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('User home page');
});

router.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
```

#### Step 2: Use Router in Main Application
Modify `server.js`:

```javascript
const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');

// Use userRoutes for paths starting with /users
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Explanation:
- We create an `express.Router()` instance.
- Define routes (`/` and `/:id`) within `userRoutes.js`.
- Import and use the router in `server.js`, mounting it at `/users`.

## 3. Using Middleware in Express Router
Middleware functions execute before the final request handler.

#### Example:
```javascript
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
```
This logs the request timestamp before processing any route.

## 4. Route Methods in Express
| HTTP Method | Description |
|------------|-------------|
| GET | Retrieve data |
| POST | Submit data |
| PUT | Update data |
| DELETE | Remove data |

Example of handling different methods:
```javascript
router.route('/user')
    .get((req, res) => res.send('Get User'))
    .post((req, res) => res.send('Create User'))
    .put((req, res) => res.send('Update User'))
    .delete((req, res) => res.send('Delete User'));
```

## Conclusion
Express Router makes it easier to manage and scale an application by separating routes into different modules. By using routers effectively, developers can maintain clean and organized code for better scalability and maintainability.

### References
- [Express Documentation](https://expressjs.com/en/guide/routing.html)

