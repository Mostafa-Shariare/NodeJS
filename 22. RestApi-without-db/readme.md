# 🛠️ Express REST API (No DB, MVC Architecture)

A simple REST API built with **Express.js**, following the **MVC (Model-View-Controller)** architecture, and doesn't rely on any database. Perfect for learning API structures or rapid prototyping.

---

## 🚀 Features

- RESTful routing (GET, POST, PUT, DELETE)
- MVC Folder Structure
- Data stored temporarily in-memory (JavaScript array/object)
- Organized and beginner-friendly code

---

## 🗂️ Project Structure

```
📦 your-project/
├── 📁 controllers/
│   └── controller.js
├── 📁 model/
│   └── models.js
├── 📁 routes/
│   └── index.js
├── 📁 views/
│   └── index.html
|    └── 404.html
├── 📄 app.js
└── 📄 index.js
```

---

## 📦 Installation

```bash
git clone https://github.com/Mostafa-Shariare/Restapi-without-db.git
cd your-repo-name
npm install
```

---

## 🧪 Run the API

```bash
npm start
```

By default, server will run on `http://localhost:3000`

---

## 📬 API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | /api/users     | Get all users       |
| GET    | /api/users/:id | Get user by ID      |
| POST   | /api/users     | Add new user        |
| PUT    | /api/users/:id | Update user by ID   |
| DELETE | /api/users/:id | Delete user by ID   |

---

## 🧠 How It Works (MVC Breakdown)

- **Model** – Handles the in-memory data logic (`userModel.js`)
- **Controller** – Manages API logic & responses (`userController.js`)
- **Routes** – Handles URL mappings to controller functions (`userRoutes.js`)

---

## 📌 Note

Since there is no database, all data will reset every time the server restarts.

---



