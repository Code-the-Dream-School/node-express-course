const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    // basic idea of api
    // res.status(200).json([{name:'Denise'}, {name:'Vader'}])
    res.status(200).json(products)
})

app.listen(5000,()=> {
    console.log('Server is actively listening to port 5000')
})