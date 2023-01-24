const http = require("http");
const { readFileSync } = require("fs");
const data = readFileSync("./new-public/index.html");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  } else if (url === "/sample") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is working</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(3000);
