const http = require('http');

const server = http.createServer((req, res) => {
  
    res.setHeader('Content-Type', 'text/plain');

    // Check the URL and respond accordingly
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello, welcome to our Home Page.\n');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('Learn about us.\n');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('How to reach us.\n');
    } else {
        res.statusCode = 404;
        res.end('Oops! Page not found.\n');
    }
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
