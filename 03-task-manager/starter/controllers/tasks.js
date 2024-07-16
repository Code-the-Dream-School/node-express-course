const Task = require('../models/task')

const getAllTasks = (req,res)=> {
    res.send('all items from the file')
}

//you can hardcode this... but we are using req.body instead
const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res)=>{
    res.json({id: req.params.id})
}
const updateTask = (req, res)=>{
    res.send('update task')
}
const deleteTask = (req, res)=>{
    res.send('delete task')
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask,}

//Notes start with res.send('')
//eventually use res.json()
//models - instances of the model are called document 
//create is looking for the object with the properties 