const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //select values we want see
  //skip - skips first item in response
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("price name")
    .select("name price")
    .limit(10)
    .skip(1);
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  console.log(req.query);
  //fields - for select
  const { name, featured, company, sort, fields, numericFilters } = req.query;
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
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq"
    };
    const regEx = /\b(<|>|<=|>=|=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      match => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach(item => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
    console.log(queryObject);
  }
  let result = Product.find(queryObject);
  //sort
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
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts
};

// const getAllProductsStatic = async (req, res) => {
//select values we want see
//skip - skips first item in response
// const products = await Product.find({ price: { $gt: 30 } })
//   .sort("price name")
//   .select("name price")
//   .limit(10)
//   .skip(1);
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
// res.status(200).json({ products, nbHits: products.length });
//   throw new Error("testing async errors");
//   res.status(200).json({ msg: "product testing route" });
// };

// const getAllProducts = async (req, res) => {
//   console.log(req.query);
//fields - for select
//   const { name, featured, company, sort, fields, numericFilters } = req.query;
//   const queryObject = {};
//   if (name) {
//     queryObject.name = { $regex: name, $options: "i" };
//   }
//   if (featured) {
//     queryObject.featured = featured === "true" ? true : false;
//   }
//   if (company) {
//     queryObject.company = company;
//   }
//   if (numericFilters) {
//     const operatorMap = {
//       ">": "$gt",
//       ">=": "$gte",
//       "<": "$lt",
//       "<=": "$lte",
//       "=": "$eq"
//     };
//     const regEx = /\b(<|>|<=|>=|=)\b/g;
//     let filters = numericFilters.replace(
//       regEx,
//       match => `-${operatorMap[match]}-`
//     );
//     const options = ["price", "rating"];
//     filters = filters.split(",").forEach(item => {
//       const [field, operator, value] = item.split("-");
//       if (options.includes(field)) {
//         queryObject[field] = { [operator]: Number(value) };
//       }
//     });
//     console.log(queryObject);
//   }
//   let result = Product.find(queryObject);
//   const products = await Product.find(queryObject);
// if (sort) {
//   console.log(sort);
//   const sortList = sort.split(",").join(" ");
//   result = result.sort(sortList);
// } else {
//   result = result.sort("createdAt");
// }
// if (fields) {
//   const fieldsList = fields.split(",").join(" ");
//   result = result.select(fieldsList);
// }
// const page = Number(req.query.page || 1);
// const limit = Number(req.query.limit || 10);
// const skip = (page - 1) * limit;

// result = result.skip(skip).limit(limit);
// const products = await result;
//   const products = await Product.find(req.query);
// res.status(200).json({ msg: products, nbHits: products.length });
//   res.status(200).json({ msg: "product route" });
// };

// module.exports = {
//   getAllProductsStatic,
//   getAllProducts
// };
