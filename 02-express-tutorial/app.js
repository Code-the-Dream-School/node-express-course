const express = require("express");

const app = express();

const peopleRouter = require("./routes/people");
const productsRouter = require("./routes/products");

//create a middleware function logger
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toTimeString();
  console.log(method, url, time);
  next();
};

//" take the logger call out of your app.get() statement, and call it via app.use(), for all paths, instead. Verify that it still works."
app.use(logger);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//" Change the directory for your static serving from ./public to ./methods-public, and try out that frontend from your browser."

app.use(express.static("./methods-public"));
// app.use(express.static("./public"))

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);
app.post("/login", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    res.status(201).send(`Welcome ${req.body.name}`);
  }
});
//"Call your logger using the first method, in one of your app.get() statements, and verify that it works. "
// app.get("/api/v1/test", logger, (req, res)=> {

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Express Tutorial");
});
