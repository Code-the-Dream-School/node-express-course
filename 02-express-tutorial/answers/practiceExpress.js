"use strict";

const port = 3000,
  express = require("express"),
  app = express();

app.use(express.static("./new-public"));

app.get("/sample", (req, res) => {
  res.status(200).send("This is working.");
});

app.all("*", (req, res) => {
  res.status(404).send("We could not find the page you are looking for.");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});