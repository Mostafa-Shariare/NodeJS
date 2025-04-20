const express = require('express');
const multer = require('multer');
const app = express();

const port = 3000;

//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name                                   )
    }
  })
  
  const upload = multer({ storage: storage })


  //register route
app.get('/register', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.post('/register', upload.single('image'), (req, res) => {
    res.status(200).send('User registered successfully');
});

app.post('/', (req, res) => {
    res.status(200).send('User this is home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});