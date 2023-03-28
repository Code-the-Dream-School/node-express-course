const port = 5000,
  http = require("http"),
  server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    // Home page
    if (url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write('<h1>Home Page</h1>');
      res.end();
      // About page
    } else if (url === "/about") {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write('<h1>About Page</h1>');
      res.end();
      // 404/ Error Page
    } else {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.write('<h1>Page Not Found</h1>');
      res.end();
    }
  });

server.listen(port);