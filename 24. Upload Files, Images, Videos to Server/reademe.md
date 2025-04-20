## Upload Files, Images, Videos to Server


### 🧾 HTML Side (Frontend)

```html
<form action="/register" method="post" enctype="multipart/form-data">
```

#### 💡 Key Things:
- `action="/register"`: The form will submit to this route on the server.
- `method="post"`: Data is sent using POST.
- `enctype="multipart/form-data"`: **Mandatory** when uploading files. This allows binary data (like images/videos) to be sent.

```html
<input type="file" name="image">
```

- This lets users **select a file** from their device.
- The `name="image"` is very important — it must match what you use in `upload.single('image')` in your backend.

```html
<button type="submit"> Register </button>
```

- When clicked, the form submits the file to the backend.

---

### 🧠 Backend: Node.js + Express + Multer

#### 1. **Import Modules & Set Up App**
```js
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
```

---

### 📂 Multer Configuration (Core Part)

```js
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name)
    }
});
```

Let’s break this down:

#### 💾 `destination`
- Where to store the uploaded files.
- `./uploads/` means: **a folder named `uploads` in the current directory.**
- If it doesn’t exist, you'll need to create it manually (or write code to do that).

#### 🏷️ `filename`
- How to name the uploaded file.
- You're using `Date.now()` to ensure uniqueness, plus the original file name.
- Example: `1713587690083-image.jpg`

---

### 🔧 Create Upload Middleware

```js
const upload = multer({ storage: storage });
```

- This line sets up the multer middleware with your storage rules.

---

### 🚀 Routes

#### 🟢 `GET /register`

```js
app.get('/register', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});
```

- When the browser opens `/register`, it serves your form page.

#### 🔴 `POST /register`

```js
app.post('/register', upload.single('image'), (req, res) => {
    res.status(200).send('User registered successfully');
});
```

#### What Happens Here:
- `upload.single('image')`: 
  - Multer looks for a single file with `name="image"` (from the form).
  - It **processes and saves** the file to the `/uploads` folder.
- After that, your route logic continues.
- `req.file`: Holds file info (like name, path, size, etc.).
- You can also access `req.body` for other form fields (like name, email, etc. — if you add them).

---

### 🔄 Optional Route
```js
app.post('/', (req, res) => {
    res.status(200).send('User this is home');
});
```

Just a basic POST route at root. Not used for the upload part.

---

### 📁 Directory Structure (Recommended)
```
project-folder/
│
├── uploads/          <-- where files go
├── index.html        <-- your form
├── app.js            <-- your server code
├── package.json
```

---

### 🤖 What is Multer?

> **Multer** is a Node.js middleware for handling `multipart/form-data`, which is **primarily used for uploading files**.

#### Why Use Multer?
- Parses multipart forms.
- Saves files to disk or memory.
- Gives control over filenames and storage destinations.

---

### 🧪 Test It:
1. Start server: `node app.js`
2. Visit: `http://localhost:3000/register`
3. Choose a file → Click "Register"
4. File is saved in `./uploads/` folder
5. You see: `User registered successfully`

---


