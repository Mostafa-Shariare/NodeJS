//use of headers
const express = require("express");

const app = express();

const port = 3000;

app.get("/userID/:id/userName/:name", (req, res) => {
    const id = req.header('id')
    const name = req.header('name ')
   
    res.send(`<h1>Student id is : ${id} & Student name is : ${name}</h1>`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})