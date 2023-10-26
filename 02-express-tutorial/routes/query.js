const express = require("express");
const router = express.Router();

const { products } = require("../data");

router.get("/", (req, res) => {
  const { search, limit, maxPrice } = req.query;

  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (maxPrice) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price < parseFloat(maxPrice);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res
      .status(200)
      .json({ message: "No matching product", success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

module.exports = router;
