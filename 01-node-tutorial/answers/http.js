const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome")
    }
    if (req.url === "/about") {
        res.end("about")
    }
    res.end(`
            <h1>Oop!</h1>
            <p>We can't seem to find the page you're looking for, head back to the home page.</p>
            <a href="/home">Home</a>
    `)
})
server.listen(3000)