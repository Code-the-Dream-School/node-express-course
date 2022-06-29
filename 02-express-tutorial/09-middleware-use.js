const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


app.use([logger, authorize])
//req => middleware => res
// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next() 
//   //res.send('testing') 
// }

app.get('/',(req,res) => {

  res.send('Home')
})

app.get('/about',(req, res) => {
  res.send('About')
})
app.get('/api/products', (req,res) => {

  res.send('Products')
})

app.get('/api/items',(req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})