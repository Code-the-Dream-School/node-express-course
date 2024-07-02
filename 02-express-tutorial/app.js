const express = require('express')
const path = require('path')
const { products } = require("./data.js");

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" });
  })

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({ success: true, data: products })
  })

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => (p.id === idToFind));
    if (!product) {
        return res
          .status(404)
          .json({ success: false, msg:"That product was not found." })
      }
      res.status(200).json({ success: true, data: product })
  })


  app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit, cost } = req.query
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
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    if (cost) {
        sortedProducts =  sortedProducts.filter(product => product.price < cost);
    }
    res.status(200).json(sortedProducts)
  })

app.all('*', (req, res) => {
  res.status(404).send('Error: page not found')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000....')
})
