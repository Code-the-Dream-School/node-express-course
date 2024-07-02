console.log("Express Tutorial");

const express = require(`express`);
// const path = require(`path`);
const app = express();
const { products } = require("./data");

app.use(express.static("./public"));

app.get(`/api/v1/test`, (req, res) => {
  return res.json({ message: "It worked!" });
});

app.get(`/api/v1/products`, (req, res) => {
  return res.json({ products });
});

app.get(`/api/v1/products/sortPriceLow`, (req, res) => {
  const lowProducts = products.sort((a, b) => a.price - b.price);
  return res.json({ lowProducts });
}); //sort products with prices in ascending order

app.get(`/api/v1/products/sortPriceHigh`, (req, res) => {
  const highProducts = products.sort((a, b) => b.price - a.price);
  return res.json({ highProducts });
}); //sort products with prices in descending order

app.get(`/api/v1/products/:productID`, (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  } else {
    return res.json({ product });
  }
});

app.get(`/api/v1/query`, (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res
      .status(200)
      .json(`Oh No! No products matched your search. Try a different query.`);
  } else {
    return res.status(200).json(sortedProducts);
  }
});

app.all(`*`, (req, res) => {
  return res.status(404).send(`Resource not found.`);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.....");
});
