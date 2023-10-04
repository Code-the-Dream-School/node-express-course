const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome everybody to our first server!')
      } else {
        res.end(`
        <p>Sorry! We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
    })
    
    server.listen(4000)
    

