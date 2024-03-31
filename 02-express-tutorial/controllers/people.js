const data = require('../data.js')
const { people } = require('../data')

const addPeople = (req, res) => {
	const { name } = req.body
	if (!name) {
		return res
			.status(400)
			.json({ success: false, message: 'Please provide a name' })
	}
	people.push({ id: people.length + 1, name: req.body.name })
	res.status(201).json({ success: true, data: [...people], name })
}
const getPeople = (req, res) => {
	const person = people.map((person) => {
		console.log(person)
		const { id, name } = person
		return { id, name }
	})
	res.status(200).json(person)
}
const checkPeopleById = (req, res) => {
	const { id } = req.params
	const person = people.find((person) => person.id === Number(id))
	if (!person) {
		return res
			.status(404)
			.json({ success: false, message: `No person with ID: ${id} found.` })
	}
	res.status(200).json({ success: true, data: person })
}

const updatePeople = (req, res) => {
	const { id } = req.params
	const { name } = req.body

	const person = people.find((person) => person.id === Number(id))

	if (!person) {
		return res
			.status(404)
			.json({ success: false, message: `Person with id ${id} not found!` })
	}
	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name
		}
		return person
	})
	res.status(200).json({ success: true, data: newPeople })
}

const deletePeople = (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id))
	if (!person) {
		return res
			.status(404)
			.json({
				success: false,
				message: `No person with ID: ${req.params.id} found.`,
			})
	}
	const newPeople = people.filter(
		(person) => person.id !== Number(req.params.id)
	)
	return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
	addPeople,
	getPeople,
	checkPeopleById,
	updatePeople,
	deletePeople,
}
