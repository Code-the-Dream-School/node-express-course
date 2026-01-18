require('dotenv').config()
require('express-async-errors')
// async error

const express = require('express');
const app = express()

const connectDB = require('./db/connect')

const productRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/not-found')

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
})

app.use('/api/v1/products',productRouter)

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.port || 3000

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()