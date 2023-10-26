const express = require("express");
const app = express();
const path = require("path");
const logger = require("./logger");

const peopleRouter = require("./routes/people");
const productsRouter = require("./routes/products");
const testRouter = require("./routes/test");
const queryRouter = require("./routes/query");
const auth = require("./routes/auth");

app.use(logger);
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", auth);
app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/test", testRouter);
app.use("/api/v1/query", queryRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("server on 3000 ....");
});
