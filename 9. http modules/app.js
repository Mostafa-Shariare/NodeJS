const express = require("express");
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
    res.send("I am a get request");
})

app.post("/", (req, res) => {
    res.send("I am a post request");
})

app.put("/", (req, res) => {
    
})

app.delete("/", (req, res) => {
    res.send("I am a delete request");
})

module.exports = app