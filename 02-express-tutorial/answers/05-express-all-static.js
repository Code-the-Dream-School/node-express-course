const port = 5000,
  express = require("express"),
  app = express(),
  path = require("path");

// setup static and middleware  
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
//   adding to static assets
//   Server Side Rendering
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}...`);
});

