const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/custom-error')

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.status(200).json({ status: "success", data: { tasks, nbHits: tasks.length} });
//     } catch (err) {
//         console.error("There is an error while get all tasks: ", err);
//         res.status(500).json({ message: "There was an error retrieving the data."});
//     }
// }
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ status: "success", data: { tasks, nbHits: tasks.length }});
})

// const createTask = async (req, res) => {
//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({ message: "Task has been created successfully", task: task });
//     } catch (err) {
//         console.error("There is an error while creating a task: ", err);
//         res.status(500).json({ message: "There was an error while creating the task."})
//     }
// }
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ status: "success", data: task})
})

// const getSingleTask = async (req, res) => {
//     try {
//         // const task = await Task.findOne({_id: req.params})
//         const task = await Task.findById(req.params.id);
//         if (!task) {
//             return res.status(404).json({ message: "Task not found" });
//         }
//         res.status(200).json({ task });
//     } catch (err) {
//         console.error(`There is an error while looking for item with id: ${req.params.id}`, err);
//         res.status(500).json({ message: `There was an error while looking for item with id ${req.params.id}`});
//     } 
// }
const getSingleTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findOne({_id: req.params})
    if (!task) {
        return next(createCustomError(`No task with id: ${req.params}`, 404))
        // return res.status(404).json({ message: `No task with id: ${req.params}`})
    }
    res.status(200).json({ status: "success", data: task})
})

// const updateTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params 
//         const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
//             new: true, 
//             runValidators: true
//         })
//         if (!task) {
//             return res.status(404).json({ message: "Task not found "});
//         }
//         res.status(201).json({ task })
//     } catch (err) {
//         res.status(500).json({ message: `There was an error while looking for item with id ${req.params.id}`});
//     }
// }
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params 
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task with id: ${req.params}`, 404))
        // return res.status(404).json({ message: "Task not found"});
    }
    res.status(201).json({ task })
})

// const deleteTask = async (req, res) => {
//     try {
//         // const task = await Task.findOneAndDelete({_id: req.params})
//         const task = await Task.findByIdAndDelete(req.params.id);
//         if (!task) {
//             return res.status(404).json({ message: "Task not found" });
//         }
//         res.status(200).json({ task: null,  message: "Task successfully deleted" });
//     } catch (err) {
//         console.error(`There was an error while deleting task with id: ${req.params.id}`, err);
//         res.status(500).json({ message: `There was an error while deleting item with id ${req.params.id}`});
//     }
// }
const deleteTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params })
    if (!task) {
        return next(createCustomError(`No task with id: ${req.params}`, 404))
        // return res.status(404).json({ message: "Task not found"});
    }
    res.status(200).json({ task: null, message: "Task successfully deleted" });
})

// const editTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params
//         const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//             new: true,
//             runValidators: true,
//             overwrite: true,
//         })
//         if (!task) {
//             return res.status(404).json({ message: "Task not found"});
//         }
//         res.status(201).json({ task })
//     } catch (err) {
//         res.status(500).json({ message: `There was an error while looking for item with id ${req.params.id}`})
//     }
// }
const editTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params 
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true, 
        runValidators: true, 
        overwrite: true,
    })
    if (!task) {
        return next(createCustomError(`No task with id: ${req.params}`, 404))
        // return res.status(404).json({ message: "Task not found"});
    }
    res.status(201).json({ task })
})

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    editTask,
}