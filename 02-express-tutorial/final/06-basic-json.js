const express = require('express')
const app = express()
const { products } = require('./data')

//this is the array with data you can acess from anywhere - put in data.js above they require it 
// app.get('/', (req, res) => {
//   res.json([{name : 'john'}, {name: 'susan'}])
// })

//can be another route here 
//turn data into JSON , could be object or array 
//THIS EX sends everything 
app.get('/', (req, res) => {
  res.json(products)
})

//this sends everything too but in a link 
// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/app/products">products</a>')
// })



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
