const    express = require("express");
const app = express();
const port = 3000;

//what is middleware?
//middle ware is a function that runs between a request and a response

const myMiddleware = (req, res, next) => {
    console.log("I am a middleware");
    req.currentTime = Date.now();
    next();
}

app.get("/", myMiddleware, (req, res) => {   
    console.log("I am a middleware");   
     
    res.send("Hello World!");   
})

app.get("/about", myMiddleware, (req, res) => {   
    console.log("I am a middleware");   
     
    res.send("Hello World!");   
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
