'use strict';
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');
const Task = require('../models/Task'),
  getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  }),

  createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    // res.send('create single task');
    res.status(201).json({task}); 
  }),

  getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({_id: taskID});
    // res.send('get single task');
    if (!task) {
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      // return res.status(404).json({msg: `No task with id: ${taskID}`});
    }
    res.status(200).json({task});
  }),

  updateTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params;
    // res.send('update task');
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      // return res.status(404).json({msg: `No task with id: ${taskID}`});
    }
    res.status(200).json({task});
  }),

  deleteTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if (!task) {
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      // return res.status(404).json({ msg: `No task with id: ${taskID}`});
    }
    // res.send('delete task');
    res.status(200).json({task});
    // other alternatives
    // res.status(200).send();
    // res.status(200).json({task: null, status: 'success'});
  });

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};