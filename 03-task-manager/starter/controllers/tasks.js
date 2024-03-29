const Task = require('../models/Task')

const getAllTasks  = (req,res) => {
    res.send("all Items")
}

const createTask  = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
}
// const createTask  = (req,res) => {
//     res.json(req.body)
//     // res.send("Create Task")
// }

const getTask  = (req,res) => {
    res.json({id:req.params.id})
    // res.send("Get Task")
}

const updateTask  = (req,res) => {
    res.send("Update Task")
}

const deleteTask  = (req,res) => {
    res.send("Delete Task")
}

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}