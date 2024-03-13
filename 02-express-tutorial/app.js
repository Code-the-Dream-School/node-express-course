const express = require("express");
const app = express();
const { products } = require("./data");
// middleware
app.use(express.static("./public"));
//test url
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
//all products
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});
//product by id
app.get("/api/v1/products/:productID", (req, res) => {
  //convert id to integer
  const productID = parseInt(req.params.productID);
  //find the product
  const product = products.find((product) => product.id === productID);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product does not found");
  }
});
//search url
app.get("/api/v1/query", (req, res) => {
  let searchedProduct = [...products];
  const { search, limit, price } = req.query;
  if (search) {
    searchedProduct = products.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    searchedProduct = searchedProduct.slice(0, Number(limit));
  }
  if (price) {
    searchedProduct = searchedProduct.filter((product) => {
      return product.price < price;
    });
  }
  res.json(searchedProduct);
});
//not found response
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening in port 3000");
});
