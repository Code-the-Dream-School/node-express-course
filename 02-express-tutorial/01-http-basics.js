const http = require('http')
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url;
    if(url === '/'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write(homePage)
    res.end()
    } else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Not Found</h1>')
        res.end()
    }
})

server.listen(5000)