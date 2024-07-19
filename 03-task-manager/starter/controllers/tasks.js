const Task = require(`../models/task`);
const asyncWrapper = require(`../middleware/async`);
const { createCustomError } = require(`../errors/custom-error`);

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount:tasks.length });     Alt Options
  // res.status(200).json({ status: "success", data:{tasks, nbHits:tasks.length} });     Alt Options
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  } else {
    res.status(200).json({ task });
  }
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  } else {
    res.status(200).json({ msg: `Success. Task ${taskID} Deleted.` });
  }
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  } else {
    res.status(200).json({ task });
  }
});

// const replaceTask = async (req, res) => {     "Put" example as opposed to "Patch"
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with ID: ${taskID}` });
//     } else {
//       res.status(200).json({ task });
//     }
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // replaceTask,
};
