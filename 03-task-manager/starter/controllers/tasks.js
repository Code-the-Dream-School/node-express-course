const Task = require('../models/Task')

const getAllTodo = (req, res) => {
	res.status(200).send('You see all the data here!')
}
const createTodo = async (req, res) => {
	const task = await Task.create(req.body)
	res.status(201).json({ task })
}
const getTodo = (req, res) => {
	res.json({ id: req.params.id })
}
const updateTodo = (req, res) => {
	res.status(200).send('Data updated Successfully!')
}
const deleteTodo = (req, res) => {
	res.status(200).send(`the data with the id "${req.params.id}" deleted!`)
}

module.exports = {
	getAllTodo,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
}
