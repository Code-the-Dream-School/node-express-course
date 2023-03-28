const port = 5000,
  express = require("express"),
  app = express(),
  { products }  = require("../data")

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image} = product;
    return {id, name, image};
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  };
  console.log(singleProduct);
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  // console.log(req.params);
  return res.send("Hello World");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if(search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search');
    return res.status(200).json( {success: true, data: []} );
  }
  return res.status(200).json(sortedProducts);
});

app.listen(port, () => {
  console.log(`Server is listening at port: ${port}...`);
}); 
