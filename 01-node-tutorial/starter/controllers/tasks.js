const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom_error");
//we will do async wrappers
//все функции у нас повторяют друг друга. решение здесь - создать middleware function
//that essentially will wrap ours controllers
// и нам не надо будет повторяться
//there are some packages for that but here we will do it ourselves

// const getAllTasks = async (req, res) => {
//   //   res.send("get all tasks");
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks: tasks });
//     //res.status(200).json({ tasks, amount: tasks.length });
//     //res.status(200).json({ success:true, data:{tasks, nbHits: tasks.length} });
//     //res.status(200).json({ status: "success", data:{tasks, nbHits: tasks.length} });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks: tasks });
});

// const createTask = async (req, res) => {
//   // res.json(req.body)
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// const getTask = async (req, res) => {
//   //   res.json({ id: req.params.id });
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    //we have custom error mow and do not need this code
    // const error = new Error("NOT Found");
    // error.status = 404;
    // return next(error);
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// const deleteTask = async (req, res) => {
//   //   res.send("delete a task");
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     }
//     //но на фронте нам надо только рендерить, если получили ответ 200, а видеть удаленную задачу - не целесообразная задача, поэтому можно так
//     res.status(200).json({ task });

//     //так
//     //res.status(200).send();
//     //или так
//     //res.status(200).json({ task: null, status: "success" });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    //we have custom error mow and do not need this code
    //return res.status(404).json({ msg: `No task with id : ${taskID}` });
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
//difference between PUT and PATCH (they both for update resources)
//PUT - replace existing resource (if I'll pass only a part of properties, all that I didn't pass will be removed)
//PATCH - for partial update (only the property that is passed in will be updated)
//

//for update we need ID AND body
//we also need to pass some options

//PATCH
// const updateTask = async (req, res) => {
//   //   res.send("update a task");
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       //return new item
//       new: true,
//       //check that like a schema
//       runValidators: true
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    //we have custom error mow and do not need this code
    //return res.status(404).json({ msg: `No task with id : ${taskID}` });
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

//PUT
//в нашем случае еще в схеме надо убрать дефолт на комплитед, чтобы можно было не вставляя его не получать ничего в результате
//in PUT we replace the item
// const editTask = async (req, res) => {
//   //   res.send("update a task");
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       //return new item
//       new: true,
//       //check that like a schema
//       runValidators: true,
//       //now it PUT
//       overwrite: true
//     });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id : ${taskID}` });
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
};
