const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
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

const htmlForm = `
    <form action="/user" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <button type="submit">Register</button>
    </form>`

app.get("/user", (req, res) => {
    res.send(htmlForm);   
})

app.post("/user", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const user = {
        name: name,
        email: email
    }
    users.push(user);
    res.status(201).send(users);


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}) 
