const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //select values we want see
  const products = await Product.find({}).select("name price");
  //sort
  //   const products = await Product.find({}).sort("-name price");
  //   const search = "a";
  //   const products = await Product.find({
  //"i" - case insensitive
  //     name: { $regex: search, $options: "i" }
  //   });
  //   const products = await Product.find({ name: "wooden table" });
  //   const products = await Product.find({ featured: true });
  //   const products = await Product.find({});
  res.status(200).json({ msg: products, nbHits: products.length });
  //   throw new Error("testing async errors");
  //   res.status(200).json({ msg: "product testing route" });
};

const getAllProducts = async (req, res) => {
  console.log(req.query);
  //fields - for select
  const { name, featured, company, sort, fields } = req.query;
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
    console.log(sort);
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  const products = await result;
  //   const products = await Product.find(req.query);
  res.status(200).json({ msg: products, nbHits: products.length });
  //   res.status(200).json({ msg: "product route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts
};
