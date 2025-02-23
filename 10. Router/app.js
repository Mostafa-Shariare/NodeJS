const express = require("express");

const app = express();
// const port = 3000;
const userRouter = require("./routes/user.route")

app.use(userRouter);


app.use((req, res) => {
    res.send("Not a valid url");
})



module.exports = app