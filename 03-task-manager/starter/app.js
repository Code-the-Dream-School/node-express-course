
//npm install - download everything 
// npm start - to spin up nodemon 
const express = require('express');
const app = express('./db/connect');
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
//this hides files, dont need to name it 
require('dotenv').config()

//middleware
//this middleware is so we have access to req.body 
app.use(express.json())

//routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})

// http://localhost:3000/api/v1/tasks
app.use('/api/v1/tasks', tasks)

// eventually more code 
const port = 3000

const start =async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch (error){
        console.log(`This is your ERROR: ${error}`)
    }
}

start()