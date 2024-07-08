console.log("Express Tutorial");

//Requires
const express = require(`express`);
const app = express();
const { products, people } = require("./data");

//Middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(`Method: ${method}, URL: ${url}, Time: ${time}`);
  next();
};

//HTTP Methods
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));
app.use(logger);

app.get(`/api/v1/test`, (req, res) => {
  return res.json({ message: "It worked!" });
});

app.get(`/api/v1/people`, (req, res) => {
  return res.json({ people });
});

app.post(`/api/v1/people`, (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name." });
  } else {
    res.json({ success: true, message: `${req}` });
  }
});

app.get(`/api/v1/products`, (req, res) => {
  return res.json({ products });
});

app.get(`/api/v1/products/sortPriceLow`, (req, res) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  return res.json({ sortedProducts });
}); //sort products with prices in ascending order

app.get(`/api/v1/products/sortPriceHigh`, (req, res) => {
  const sortedProducts = products.sort((a, b) => b.price - a.price);
  return res.json({ sortedProducts });
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
  const { search, limit, sortPrice, sortNegPrice } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  // if (sortPrice) {
  //   sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  //   return sortedProducts;
  // }
  // if (sortNegPrice) {
  //   sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  //   return sortedProducts;
  // }
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
