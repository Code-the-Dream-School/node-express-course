const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my home page");
  } else if (req.url === "/about") {
    res.end("Here is my history");
  } else {
    res.end(`
  <h1> Oops! </h1>
  <p>Can't find this page</p>
  <a href="/">Back home</a>
  `);
  }
});

server.listen(3000);
