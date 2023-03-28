const port = 5000,
  express = require("express"),
  app = express(),
  { products }  = require("../data")

app.get("/", (req, res) => {
    res.json(products);
});

app.listen(port, () => {
console.log(`Server is listening at port: ${port}...`);
});
