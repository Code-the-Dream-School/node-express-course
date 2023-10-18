// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     console.log('user requests resource');
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(3000, () => {
//     console.log('server is listening on port 3000...');
// })

const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data");

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const singleProduct = products.find((p) => p.id === idToFind);

  if (!singleProduct) {
    return res.status(404).json({ message: "That product was not found" });
  }

  return res.json(singleProduct);
});
//   const { productID } = req.params;

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   );
//   if (!singleProduct) {
//     return res.status(404).json({message: "No Such Product"});
//   }

//   return res.json(singleProduct);
// });

app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxPrice } = req.query;

  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (maxPrice) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price < parseFloat(maxPrice);
    });
  }
  // const searchRegex = new RegExp(search, "i");
  // sortedProducts = sortedProducts.filter((product) => {
  //     return searchRegex.test(product.name);
  // });
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res
      .status(200)
      .json({ message: "No matching product", success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("server on 3000 ....");
});
