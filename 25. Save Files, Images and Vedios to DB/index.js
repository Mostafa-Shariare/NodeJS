const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                     

const port = 3000;
//connect to mongoose
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userTestDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        
    }
}


//creating schema and model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

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

app.post('/register', upload.single('image'),async(req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            image: req.file.filename
        });
        await newUser.save();
        
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send('Internal Server Error');
        
    }
    res.status(200).send('User registered successfully');
});

app.post('/', (req, res) => {
    res.status(200).send('User this is home');
});

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
    await connectDB();
});