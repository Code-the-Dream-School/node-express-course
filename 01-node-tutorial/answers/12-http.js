const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.end('Welcome to home Page')
        return
    }
    if (req.url === '/about') {
        res.end('This a About Page')
        return
    }
    res.end(`
    <h1>No page found</h1>
    <a href='/'>Home</a>
    `)
})


server.listen(3000)