const express = require("express");
const app = express();

// Route 1: Match only usernames with letters (no numbers or special chars)
app.get(/^\/user\/[a-zA-Z]+$/, (req, res) => {
    res.send("Matched a user route with only letters!");
});

// Route 2: Match only numeric user IDs
app.get('/user/:id([0-9]+)', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Route 3: Match multiple static paths (about, contact, help)
app.get(/^\/(about|contact|help)$/, (req, res) => {
    res.send(`You visited the ${req.path} page.`);
});

// Route 4: Restricting usernames to letters and numbers only (no special chars)
app.get('/profile/:username([a-zA-Z0-9]+)', (req, res) => {
    res.send(`Welcome to ${req.params.username}'s profile`);
});

// Route 5: Optional blog post parameter (homepage if none provided)
app.get(/^\/blog\/([a-zA-Z0-9]+)?$/, (req, res) => {
    if (req.params[0]) {
        res.send(`Blog post: ${req.params[0]}`);
    } else {
        res.send("Blog homepage");
    }
});

// Route 6: Wildcard search query matching any text after /search/
app.get(/^\/search\/(.*)$/, (req, res) => {
    res.send(`Search query: ${req.params[0]}`);
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
