const Task = require('../models/Task')

const getAllTasks = (req,res) =>{
    res.json('all items from file')
}
const createTask = async (req,res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getTask = (req,res) =>{
    res.json({id:req.params.id})
}
const updateTask = (req,res) =>{
    res.send('updating a task')
}
const deleteTask = (req,res) =>{
    res.send('deleting a task')
}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}