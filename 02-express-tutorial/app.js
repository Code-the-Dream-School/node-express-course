const express = require("express")
const app = express()
const { products } = require("./data")

app.get("/", (req, res) => {
  res.send(`<h1>Home Page </h1><a href="/api/products">products</a>`)
})

//set up with route paramter
app.get("/api/products/:productID", (req, res) => {
  //single product using find()
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send("Product does not exist")
  }
  //gets all items
  // const newProducts = products.map((product) => {
  //   const { id, name, image } = product
  //   return { id, name, image }
  // })
  res.json(singleProduct)
})

app.get("/api/product/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params)
  res.send("hello world")
})

app.get("/api/v1/query", (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("products dont match search")
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5200, () => {
  console.log("server is listening 5200")
})
