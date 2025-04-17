
const Task  = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('All Items from the file')
}
const getTask = (req, res) => {
    res.json({id : req.params.id })
}
const createTask = async (req, res) => {
    try {
        console.log(req.body);
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.error("🔥 Error creating task:", error);
        res.status(500).json({ 
            msg: "Something went wrong", 
            error: error.message,  // ← human-readable
            stack: error.stack     // ← useful for debugging
        });
    }
    
}
const updateTask = (req, res) => {
    res.send('updateTask')
}
const deleteTask = (req, res) => {
    res.send('delete Task')
}


module.exports= {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}