const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const bodyparser = require("body-parser");
//const usersRoute = require("./routes/route");
const usersRoute = require("./routes/route");   



const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/users", usersRoute);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})


//route not found
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html"); 
    
})


module.exports = app