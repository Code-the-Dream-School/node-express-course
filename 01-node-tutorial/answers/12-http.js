const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome!');
    } else {
        res.end('Page is not found');
    }
})

server.listen(3000);
