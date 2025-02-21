const { log } = require('console');
const http = require('http');

const myserver = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("frirst server")
    res.end();
})

myserver.listen(3000, () => {
    console.log("server is running successfully.");
    
}) 

//status code 200, 300, 400, etc

