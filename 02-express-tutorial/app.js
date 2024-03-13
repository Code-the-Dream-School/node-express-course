const express = require('express')
const { products } = require("./data");
const app = express()
app.use(express.static("./public"))

// const idToFind = parseInt(req.params.productID); 
// const product = products.find((p) => p.id === idToFind);

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params); 
    const product = products.find((p) => p.id === idToFind);
    if (!product) {
        // res.json({message: "That product was not found."})
         return res.status(404).json({message: "That product was not found."})
      }
    res.json(product);
  })

app.get('/api/v1/products', (req, res) => {
    let fProducts = [...products]
    // const idToFind = parseInt(req.params.productID); 
    // const product = products.find((p) => p.id === idToFind);
    if (!fProducts) {
        // res.json({message: "That product was not found."})
         return res.status(404).json({message: "That product was not found."})
      }
    res.json(fProducts);
  })

  app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit  } = req.query
    let filteredProducts = [...products] // Copy the products array
    if (search) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.name.startsWith(search)
        })
      }
      
      if (limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit))
      }
      
    filteredProducts = filteredProducts.filter(product => product.price > 20.00)
      
      if (filteredProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] })
      }
      res.status(200).json(filteredProducts)
  })

app.all('*', (req, res) => {
    res.status(404).send('page not found')
  })
  
  
  app.listen(3000, () => {
    console.log('server is listening on port 3000....')
  })
// console.log('Express Tutorial')

