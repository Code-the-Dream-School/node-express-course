const Task = require("../models/Task");
const getAllTasks = (req, res) => {
  res.send("all Items");
};

const createTask = async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(201).send({ tasks });
};
const getSingleTask = (req, res) => {
  res.json(req.params.id);
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
