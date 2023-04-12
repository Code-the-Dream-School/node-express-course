const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./02-express-tutorial/new-public"));

// app.get("/", (req, res) => {
// can also use .join instead of .resolve
//   res.sendFile(
//     path.resolve(__dirname, "./02-express-tutorial/new-public/index.html")
//   );
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found....");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});