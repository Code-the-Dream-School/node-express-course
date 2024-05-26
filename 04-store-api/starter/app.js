require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const productRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
	res.send('<h2>Store API</h2><a href="/api/v1/products">Products Route </a>')
})

app.use('/api/v1/products', productRouter)

//product routes
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
	await connectDB(process.env.MONGO_URI)
	try {
		app.listen(port, console.log(`Server is listening to the port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}

start()
