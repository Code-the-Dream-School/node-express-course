const express = require("express");
const router = express.Router();
const { products } = require("../../data");

router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:productID", (req, res) => {
  const idToFind = Number(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});
router.get("/query/search", (req, res) => {
  let { search, limit, maxPrice, regex } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < Number(maxPrice)
    );
  }

  if (regex) {
    const pattern = new RegExp(regex, "i");
    filteredProducts = filteredProducts.filter((product) =>
      pattern.test(product.name)
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }

  res.json(filteredProducts);
});

module.exports = router;
