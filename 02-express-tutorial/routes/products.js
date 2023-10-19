const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  findProduct
} = require("../controllers/products");

// router.get("/api/v1/test", (req, res) => {
//   res.status(200).json({ message: "It worked!" });
// });

router.get("/", getProducts);

router.get("/:productID", getProduct);

router.get("/query", findProduct);

module.exports = router;
