const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasks') // used tasksRouter because it makes more sense to me :)
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/api/v1/tasks', tasksRouter)

const port = 3000

const start = async () => { // async function because connectDB returns a promise
    try {
        await connectDB(process.env.MONGO_URI) // connect to DB
        app.listen(port, console.log("Server is running on port 3000...")) // then run the server
    } catch (error) {
        console.log(error)
    }
}

start() // invoke start function to connect to the db and run the server