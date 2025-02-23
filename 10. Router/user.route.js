const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("I am a get request");
})

router.get("/register", (req, res) => {
    res.send("I am a get request of register route");
})

router.get("/login", (req, res) => {
    res.send("I am a get request of login route");
})

module.exports = router;
