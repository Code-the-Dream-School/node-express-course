const express = require('express');
const { products } = require('./data')

const app = express();

app.use(express.static('./public')) 

app.get('/api/v1/test', (req,res)=> {
  app.get(res.json({message: 'It worked!'}))
})

app.get('/api/v1/products', (req,res)=> {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/v1/productsall', (req,res)=> {
  app.get(res.json(products))
})

app.get('/api/v1/products/:productID', (req,res)=> {
  const idToFind = parseInt(req.params.productID) // because this will be a string, and we need an integer
  const product = products.find((p) => p.id === idToFind)
  if(!product){
    return res.status(404).send('<h1>resource not found - 404</h1>')  
  }
  return app.get(res.json(product))
})

app.get('/api/v1/query', (req,res)=> {
  const { search, limit, costmax } = req.query
  let sortedProducts = [...products]  // to clarify

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if(costmax){
    sortedProducts = sortedProducts.filter((product)=>{
      return parseFloat(product.price) < Number(costmax)
    })
  }

  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search')
    return res.status(200).json({success: true, data: []})
  }
  return res.status(200).json(sortedProducts)

})


app.all('*', (req,res)=> {
  res.status(404).send('<h1>resource not found - 404</h1>')
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})


