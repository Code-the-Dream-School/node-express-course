const { products } = require("../data");

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const singleProduct = products.find((p) => p.id === idToFind);

  if (!singleProduct) {
    return res.status(404).json({ message: "That product was not found" });
  }

  return res.json(singleProduct);
};

module.exports = {
  getProducts,
  getProductById,
};
