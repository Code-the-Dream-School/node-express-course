const express = require('express')
const router = express.Router()
const {getAllTasks,createtask,getTask,UpdateTask,deleteTask,editTask} = require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createtask)
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask)

module.exports = router