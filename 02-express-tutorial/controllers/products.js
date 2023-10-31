const { products } = require("../data");

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const idToFind = parseInt(req.params.productID); // parseInt will convert a string to an integer
  console.log(idToFind);
  const product = products.find(p => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  }
  return res.status(200).json(product);
};

const findProduct = (req, res) => {
  const { search, limit, priceLessThan } = req.query;
  let sortedItems = [...products];
  if (search) {
    sortedItems = sortedItems.filter(product => {
      return product.name.startsWith(search);
    });
  }
  if (priceLessThan) {
    sortedItems = sortedItems.filter(product => {
      return product.price < priceLessThan;
    });
  }
  if (limit) {
    sortedItems = sortedItems.slice(0, Number(limit));
  }
  if (sortedItems.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedItems);
};

module.exports = {
  getProducts,
  getProduct,
  findProduct
};
