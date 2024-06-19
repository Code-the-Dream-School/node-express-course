const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is an about page with our little history");
  }
  res.end(`
       <h1>Error page</h1> 
       <p>We can't seem to find the page you are looking for</p>
       <a href="/">back home</a>
        `);
});

server.listen(3000);
