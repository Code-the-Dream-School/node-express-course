const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require("../middleware/notFound")
const errorhandler = require("../middleware/errorhandler")
//middleware 
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorhandler)
//routes

app.get('/api/v1/tasks',(req,res)=>{

})
app.post('api/v1/tasks',(req,res)=>{

})
app.get('/api/v1/tasks/:id',(req,res)=>{

})
app.patch('/api/v1/tasks/:id',(req,res)=>{

})
app.delete('/api/v1/tasks:id',(req,res)=>{

})
const port = 3000
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on ${port}..`))

    }catch(error){
            console.log(error)
    }
}
start()