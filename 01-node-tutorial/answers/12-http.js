//THIS sets up a webserver and API, we will also use abstraction with express

const http = require('http');

//they are requesting a page, and we send back something, also add the port 
const server = http.createServer((req, res) => {
//  res.write('Welcome to our home page')
//  res.end()
  if (req.url === '/') {
    // console.log(req) giant object 
    res.end('You are on the home page!')
  } else if (req.url === '/about') {
    res.end('About the person: they are cool')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Sorry! We dont know what page you are looking for! Click the link to take you back to the homepage!</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(3000);

//  http://localhost:3000 
// http://localhost:3000/about
// http://localhost:3000/error

// node 01-node-tutorial/answers/12-http.js