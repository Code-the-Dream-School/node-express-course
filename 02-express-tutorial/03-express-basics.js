const express = require("express");
const app = express();
// most common to send back a status code as to allow for greater control on what the browser recieves
app.get("/", (req, res) => {
  console.log("user invoked resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// the "all" method can use any method for http requests
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
