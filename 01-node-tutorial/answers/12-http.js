const http = require("http")

const server = http.createServer((req, res)=> {
if (req.url === "/") {
    res.end("Hi there! This is a home page")
    return
}
if (req.url === "/about") {
    res.end("This is an about page")
    return
} else {
    res.end(`<p>something went wrong</p>
    <a href="/">back home<a> `)
}
})

server.listen(3000)
console.log("The server is listening on port 3000.")