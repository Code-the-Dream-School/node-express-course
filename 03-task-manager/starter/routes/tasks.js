const express = require('express')
const router = express.Router()
const {
	getAllTodo,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
} = require('../controllers/tasks')

router.route('/').get(getAllTodo).post(createTodo)
router.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo)

module.exports = router
