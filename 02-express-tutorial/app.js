// app.js

const express = require('express');
const path = require('path');
const { products } = require('./data');
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/v1/test/", (req, res) => {
  res.json({ message: "It worked!" });
});

// get all products
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

// get single product by ID
app.get("/api/v1/products/:productID", (req, res) => {
  const {  productID } = req.params;
  const idToFind = parseInt(productID);

  if(isNaN(idToFind)) {
    return res.status(400).json({ message: "Invalid product ID" });
   }

   const product = products.find((p) => p.id === idToFind);
   if (!product) {
    return res.status(404).json({ message: "Product not found" });
   }
   res.json(product);
  });

  // query and filter products
app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxPrice, regex } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().startsWith(search.toLowerCase())
  );
  }
  // search by price
  if (regex) {
    try {
      const pattern = new RegExp(regex, 'i');
      filteredProducts = filteredProducts.filter((product) =>
      pattern.test(product.name)
    );
    } catch (err) {
      return res.status(400).json({ message: "Invalid regex." });
    }
  }
 
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < parseFloat(maxPrice)
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  if (filteredProducts.length < 1) {
    return res.status(200).json({ message: "No products matched your search." });
  }

  res.json(filteredProducts);

});

// 404 handler
app.all("*", (req, res) => {
  res.status(404).send("<h1>404 -- Page Not Found</h1>");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("Express Tutorial");
