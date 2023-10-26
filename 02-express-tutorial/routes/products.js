const express = require("express");
const router = express.Router();

const { getProducts, getProductById } = require("../controllers/products");

router.get("/", getProducts);
router.get("/:productID", getProductById);

module.exports = router;
