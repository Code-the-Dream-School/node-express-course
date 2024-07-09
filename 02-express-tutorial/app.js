console.log("Express Tutorial");

//Requires
const express = require(`express`);
const app = express();
const { products } = require(`./data`);
const peopleRouter = require(`./routes/people`);
const auth = require(`./authorize.js`);
const cookieParser = require(`cookie-parser`);

//Middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(`Method: ${method}, URL: ${url}, Time: ${time}`);
  next();
};

app.use(express.urlencoded({ extended: false })); //parse form data
app.use(express.json()); // parse json
app.use(cookieParser()); // parse cookies
app.use(express.static("./public")); // static assets
app.use(logger); // log requests
app.use("/api/v1/people", peopleRouter); // route people requests
app.use("/api", auth); // authorize with cookies

//HTTP Methods
app.get(`/api/v1/test`, (req, res) => {
  return res.json({ message: `It worked! Welcome ${req.user}` });
});

app.post(`/logon`, (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name." });
  } else {
    res.cookie("name", req.body.name);
    return res
      .status(201)
      .json({ success: true, message: `Hello ${req.body.name}` });
  }
});

app.delete(`/logoff`, (req, res) => {
  res.clearCookie("name");
  return res
    .status(200)
    .json({ success: true, message: `Signed off. Good Bye!` });
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

// Obsolete Code
// app.get(`/api/v1/people`, (req, res) => {
//   return res.json({ people });
// });

// app.get(`/api/v1/people/postman`, (req, res) => {
//   return res.json({ people });
// });

// app.post(`/api/v1/people`, (req, res) => {
//   if (!req.body.name) {
//     res.status(400).json({ success: false, message: "Please provide a name." });
//   } else {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   }
// });

// app.post(`/api/v1/people/postman`, (req, res) => {
//   if (!req.body.name) {
//     res.status(400).json({ success: false, message: "Please provide a name." });
//   } else {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   }
// });
