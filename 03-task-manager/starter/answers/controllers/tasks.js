'use strict';

const Task = require('../models/Task'),
  getAllTasks = (req, res) => {
  res.send('get all tasks');
  },

  createTask = async (req, res) => {
    // res.send('create single task');
    const task = await Task.create(req.body);
    res.status(201).json({task});
  },

  getTask = (req, res) => {
    // res.send('get single task');
    res.status(201).json({id: req.params.id});
  },

  updateTask = (req, res) => {
    res.send('update task');
  },

  deleteTask = (req, res) => {
    res.send('delete task');
  };

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};