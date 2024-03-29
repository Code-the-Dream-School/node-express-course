const express = require('express')
// const {getAllTasks} = require('./02-express-tutorial/controllers/tasks')
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')
const routes = express.Router();
routes.route('/').get(getAllTasks).post(createTask)
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = routes