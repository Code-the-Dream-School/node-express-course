console.log("Express tutorial")
const express = require('express')
const path = require('path')
const app = express()
const { products } = require('./data')


app.use(express.static('./public'))

app.get('/api/v1/test',(req,res) => {
    res.json({message: 'It worked!'})
})

app.get('/api/v1/products', (req,res) => {
    res.json({products})
})

app.get('/api/v1/products/:productID',(req,res) => {
    const {productID} = req.params

    const singleProduct = products.find((product) => { return product.id === Number(productID)})
    if(!singleProduct){
        res.status(404).json({message: "That product was not found."})
    }
    res.json(singleProduct)
})

app.get('/api/v1/query', (req,res) => {
    const {search, limit, price} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(price){
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < Number(price);
        })
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({status: "Not Found", data: sortedProducts})
    }
    return res.status(200).json(sortedProducts)

})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(3000, () => {
    console.log("server listening on port 3000...")
})