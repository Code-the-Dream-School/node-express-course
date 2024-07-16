//starter
const express = require('express');
//starter
const router = express.Router();

//from controller file 
const { getAllTasks, createTask, getTask, updateTask, deleteTask,} = require('../controllers/tasks')

//starter
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;