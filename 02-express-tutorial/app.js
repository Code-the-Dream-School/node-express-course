const express = require("express");
const app = express();
const { products, people } = require("./data");
const peopleRouter = require("./routes/people");
//parse post request body
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
// middleware
app.use(express.static("./methods-public"));
//people router
app.use("/api/v1/people", peopleRouter);
//logger middleware
const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getHours();
  console.log(method, url, time);
  next();
};
//test url
app.get("/api/v1/test", logger, (req, res) => {
  res.json({ message: "It worked!" });
});
//login
app.post("/login", (req, res) => {
  const name = req.body.name;
  if (name) {
    res.status(200).send(`Welcom ${name}`);
  }
  res.status(401).send("Please provide the Credentials ");
});
//all products
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});
//product by id
app.get("/api/v1/products/:productID", (req, res) => {
  //convert id to integer
  const productID = parseInt(req.params.productID);
  //find the product
  const product = products.find((product) => product.id === productID);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product does not found");
  }
});
//search url
app.get("/api/v1/query", (req, res) => {
  let searchedProduct = [...products];
  const { search, limit, price } = req.query;
  if (search) {
    searchedProduct = products.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    searchedProduct = searchedProduct.slice(0, Number(limit));
  }
  if (price) {
    searchedProduct = searchedProduct.filter((product) => {
      return product.price < price;
    });
  }
  res.json(searchedProduct);
});

//==============People==================
// app.get("/api/v1/people", (req, res) => {
//   res.json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   }
//   people.push({ id: people.length + 1, name: name });
//   res.status(201).json({ success: true, name: name });
// });
//not found response
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening in port 3000");
});
