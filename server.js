// http is the only module where we can create server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/') {
        res.end("Welcome to my node js server!\n");
    } else if (req.url === '/about') {
        res.end("This is the about page of my node js server!\n");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found!\n");
    }   
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});