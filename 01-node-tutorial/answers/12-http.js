const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else res.end("Sorry, we coulnt find the page you are looking for");
});
server.listen(3000);
