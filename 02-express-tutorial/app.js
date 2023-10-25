const express = require("express")

const app = express()
//exercise 8
const { products } = require("./data");
//exercise 4
app.use(express.static("./public"))
//exercise 7
app.get("/api/v1/test", (req, res)=> {
res.status(200).json({ message: "It worked!" })
})

app.get("/api/v1/products", (req, res)=> {
res.status(200).json( products )
})

app.get("/api/v1/products/:productID", (req, res)=> {
    //exercise 9
//res.status(200).json(req.params) 
//exercise 10
  const idToFind = parseInt(req.params.productID); // parseInt will convert a string to an integer
  console.log(idToFind)
const product = products.find((p) => p.id === idToFind); 
//exercise 11
if(!product) {
    return res.status(404).json({ message: "That product was not found."})
} 
return res.status(200).json(product)
})
//exercise 12
app.get("/api/v1/query", (req, res)=> {
    console.log(req.query)
    const {search, limit,priceLessThan} = req.query
    let sortedItems = [...products]
    if(search){
        sortedItems=sortedItems.filter((product)=> {
        return product.name.startsWith(search)
        })
    }
    if(limit){
         sortedItems=sortedItems.slice(0, Number(limit))
    } 
    //exercise 13
    if(priceLessThan){
         sortedItems=sortedItems.filter((product)=>{
        return product.price<priceLessThan
        })
    }
    // if(sortedItems.length<1){
    //     // res.status(200).send("no products match your search")
    //    return  res.status(200).json({success: true, msg: "no items founded"})
    // }
    return  res.status(200).json({success: true, data: sortedItems})
//   return  res.status(200).json(sortedItems)
    // res.send("hello world")

})


//exercise 4
// app.post()
//exercise 6
app.all("*", (req,res)=> {
    res.status(404).send("Page not found")
})

app.listen(3000, ()=> {
console.log('Express Tutorial')
})


// The require statement to import the express module
// Creation of the app as returned from calling express()
// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
// app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline.
// An app.all statement after these to handle page not found conditions.
// An app.listen statement to tell the server to listen for requests on a particular port.