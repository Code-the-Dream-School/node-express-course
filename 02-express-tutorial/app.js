// const http = require("http");
const { readFileSync } = require("fs");
const data = readFileSync("./new-public/index.html");
const logger = require("./practice-middleware.js");
const app = require("express")();

app.use(logger);
app.get("/", (req, res, next) => {
  const url = req.url;
  res.writeHead(200, { "content-type": "text/html" });
  res.write(data);
  res.end();
});

app.get("/sample", (req, res, next) => {
  const url = req.url;
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>This is working</h1>");
  res.end();
});
app.get("*", (req, res, next) => {
  const url = req.url;
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1>page not found</h1>");
  res.end();
});
// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === "/") {
//    console.
//   } else if (url === "/sample") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>This is working</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>page not found</h1>");
//     res.end();
//   }
// });

app.listen(3000, () => {
  console.log("server listening at port 3000");
});
