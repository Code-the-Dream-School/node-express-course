const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end(`Here's our short history`)
    }
    res.end(`
    <h1>Oops!!!!!</h1>
    <p>Page not found</p>
    <a href="/">Back home</a>
    `)

})

server.listen(4000)