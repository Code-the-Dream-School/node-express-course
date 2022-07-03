const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/hello', (req, res) => {
//   res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')     -get all the tasks
// app.post('/api/v1/tasks')     -create new tasks
// app.get('/api/v1/tasks/:id')     -get single tasks
// app.patch('/api/v1/tasks/:id')     -update tasks
// app.delete('/api/v1/tasks/:id')     -delete tasks

const port = process.env.PORT || 3000

const start = async() => {
  try {
    const connectionString =
     `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    await connectDB(connectionString)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  }catch (error) {
    console.log(error)
  }
}

start()





//console.log('Task Manager App')
