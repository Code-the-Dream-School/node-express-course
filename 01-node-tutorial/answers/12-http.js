const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the the home page')
    } else if (req.url === '/about') {
        res.end('This is the about page')
    } else {
        res.end(`
        <h1>ERROR!</h1>
        <p>PAGE YOU ARE LOOKING FOR DOESN'T EXIST</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(3000)
console.log('Server is listening on port 3000...')