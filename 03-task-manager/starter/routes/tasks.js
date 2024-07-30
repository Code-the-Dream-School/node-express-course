const express = require('express')
const router = express.Router()
const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask, editTask } = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask).put(editTask)


module.exports = router 
