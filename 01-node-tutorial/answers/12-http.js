const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Welcome to the home page!\n");
  } else if (req.url === "/about") {
    res.end("This is the about page!\n");
  } else if (req.url === "/contact") {
    res.end("Contact us at contact@example.com\n");
  } else {
    res.statusCode = 404;
    res.end("Page not found\n");
  }
});
server.listen(3000);
