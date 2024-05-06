const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../error/custom-error')

const getAllTodo = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({})
	res.status(200).json({ tasks })
})
const createTodo = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body)
	res.status(201).json({ task })
})
const getTodo = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params
	const task = await Task.findOne({ _id: taskID })
	if (!task) {
		return next(createCustomError(`No task found with this id: ${taskID}`, 404))
	}
	res.json({ task })
})
const updateTodo = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params

	const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
	})
	if (!task) {
		return next(createCustomError(`No task found with this id: ${taskID}`, 404))
	}

	res.status(200).json({ task })
})
const deleteTodo = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params
	const task = await Task.findOneAndDelete({ _id: taskID })
	if (!task) {
		return next(createCustomError(`No task found with this id: ${taskID}`, 404))
	}
	res.json({ task })
})
module.exports = {
	getAllTodo,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
}
