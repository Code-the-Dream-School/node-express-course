// START USING MODEL
const Task = require('../models/task')

// an instance of a model is call a document
// the first argument is the singular name of the collection the model is for

// SET UP CONTROLLERS

// Get All Tasks (GET)

// const getAllTasks = (req, res) => {
//     res.send('get all tasks');
// };

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks }); // res.status(200).json({ tasks: tasks })
    } catch (error) {
        res.status(500).json({ msg: error });
    };
};

// Create Task (POST)

// const createTask = (req, res) => {
//     // res.send('create task');
//     res.json(req.body); // send what we are getting from the client
// }

// const createTask = async (req, res) => {
//     // const task = await Task.create({ name: 'first task' }) // hardcoded
//     // res.json(req.body);
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
// }
// we have an asycronous operation but we're not handling if there is an error

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    };
}

// Get Task (GET)

// const getTask = (req, res) => {
//     // res.send('get single tasks');
//     res.json({ id: req.params.id })
// } ;

const getTask = async (req, res) => { // set up async
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID }); // use static function findOne() to look for specific ID
        // ALWAYS set up return!
        if (!task) {
            res.status(404).json({msg: `No task with id : ${taskID}` }) // if we don't find task send back 404
        }
        res.status(200).json({ task }); // if we find task with ID send back task
    } catch (error) {
        res.status(500).json({ msg: error }) // generic error
    }; // use try catch
};

// Delete Task (DELETE)

// const deleteTask = (req, res) => {
//     res.send('delete task');
// };

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        };
        res.status(200).json({ task });
        // res.status(200).send();
        // res.status(200).json({ task: null, status: 'success' });
    } catch (error) {
        res.status(500).json({ msg: error })
    };
};

// Update Task (POST)

// const updateTask = async (req, res) => {
//     res.send('update task');
// };

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { 
            new: true, 
            runValidators: true 
        }); // set up options param

        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        };

        res.status(200).json({ id: taskID, data: req.body });
    } catch (error) {
        res.status(500).json({ msg: error })
    };
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}