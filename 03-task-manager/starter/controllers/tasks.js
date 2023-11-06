const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  //   try {
  const tasks = await Task.find({});

  // res.status(200).json({ tasks });
  //equal
  // res.status(200).json({ tasks: tasks });
  // res.status(200).json({ tasks, amount: tasks.length });
  // res
  //   .status(200)
  //   .json({ success: true, data: { tasks, nbHits: tasks.length } });
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
});

const createTask = asyncWrapper(async (req, res) => {
  //   try {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
});

const getTask = asyncWrapper(async (req, res) => {
  //   res.json({ id: req.params.id });
  //   try {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task was found with id: ${taskID}` });
  }
  res.status(200).json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
});

const deleteTask = asyncWrapper(async (req, res) => {
  //   res.send("delete task");
  //   try {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task was found with id: ${taskID}` });
  }
  //here we see what was removed
  res.status(200).json({ task });

  // res.status(200).send();
  // res.status(200).json({ task: null, status: "success" });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
});

//PATCH - we update part ot item

const updateTask = asyncWrapper(async (req, res) => {
  //   res.send("update task");
  //   try {
  const { id: taskID } = req.params;
  //in this case the value will change but we will receive the original data in response and here no validation so we can pass empty value
  // const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body);
  //with options object we will pass new object (new) and validator
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `no task was found with id: ${taskID}` });
  }
  res.status(200).json({ task });
  //   } catch (error) {
  //     res.status(500).json({ msg: error });
  //   }
});

//difference between PUT and PATCH
//here PUT - we replace item
// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true
//     });
//     if (!task) {
//       return res
//         .status(404)
//         .json({ msg: `no task was found with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
  //   editTask
};
