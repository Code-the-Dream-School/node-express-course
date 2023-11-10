const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const { name, featured, company, sort } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  let result = Product.find(queryObject);
  //   const products = await Product.find(queryObject);
  if (sort) {
    console.log(result);
    // result = result.sort();
  }
  const products = await result;
  //   const products = await Product.find(req.query);
  res.status(200).json({ msg: products, nbHits: products.length });
  //   res.status(200).json({ msg: "product route" });
};
