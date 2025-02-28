const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    const id = req.query.id; //resiving data that have been sent to the server with query
    const name = req.query.name;//query parameter
    res.send(`<h1>Student id is : ${id} & Student name is : ${name}</h1>`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})