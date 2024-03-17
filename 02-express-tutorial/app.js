const express = require("express");
const { products } = require("./data");
const app = express();
app.use(express.static("./public"));

// const idToFind = parseInt(req.params.productID);
// const product = products.find((p) => p.id === idToFind);

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    // res.json({message: "That product was not found."})
    return res.status(404).json({ message: "That product was not found." });
  }
  res.json(product);
});

app.get("/api/v1/products", (req, res) => {
  const { products } = require("./data");

  if (products === undefined) {
    // console.log("The products data is undefined.");
    return res.status(404).json({ message: "That product was not found." });
    // Handle the case where products is undefined
  } else if (Array.isArray(products) && products.length > 0) {
    // console.log("The products data is not empty.");
    let fProducts = [...products];
    res.json(fProducts);
    //  handling the non-empty products array
  } else if (Array.isArray(products) && products.length === 0) {
    // console.log("The products data is empty.");
    return res.status(404).json({ message: "That product was not found." });
    // handling the empty products array
  } else {
    // console.log("The products variable is not an array.");
    return res.status(404).json({ message: "That product was not found." });
    //handling other cases
  }
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  // console.log(search);
  // console.log(limit);
  let filteredProducts = [...products]; // Copy the products array
  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }
  if (filteredProducts.length < 0) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  } else {
    filteredProducts = filteredProducts.filter(
      (product) => product.price > 20.0
    );

    res.status(200).json(filteredProducts);
  }
});

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});
app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
// console.log('Express Tutorial')
