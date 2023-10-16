const express = require("express")
const { products } = require("./data")
const app = express()

app.use(express.static("./public"))

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if(!product) {
        res.status(404).json({ message: "That product was not found."})
    }
    res.status(200).json(product)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, price } = req.query
    let searchedProducts = [...products]
    if (search) {
      searchedProducts = searchedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      searchedProducts = searchedProducts.slice(0, Number(limit))
    }
    if (price) {
      searchedProducts = searchedProducts.filter((product) => {
        return product.price === price
    })
    }
    if (searchedProducts.length < 1) {
      return res.status(200).json({ sucess: true, data: ["No data found matching your query"] })
    }
    res.status(200).json(searchedProducts)
  })

app.all('*', (req, res) => {
    res.status(404).send('Oops, page not found 😖')
  })

app.listen(3000, () => console.log("Server is running on port 3000....") )