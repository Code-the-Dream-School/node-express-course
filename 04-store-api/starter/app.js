require('dotenv').config()
//async 
require('express-async-errors')
const express = require('express')

const app = express();
const connectDB = require('./db/connect')
const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

const ProductsRouter = require("./routes/products")
//middleware 
app.use(express.json())


//routes 

app.get('/',(req,res) =>{

    res.send('<h1>Store APi </h1><a href = "/api/v1/products">Products route</>')
})
app.use('/api/v1/products',ProductsRouter)
//products route 
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

const Port = process.env.PORT || 8000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(Port,console.log(`Server is listening to the Port ${Port}`))
    } catch (error) {
        console.log(error)
    }
}
start()