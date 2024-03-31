const express = require('express')
const router = express.Router()

const {
	addPeople,
	getPeople,
	checkPeopleById,
	updatePeople,
	deletePeople,
} = require('../controllers/people.js')

router.get('/', getPeople)
router.post('/', addPeople)
router.get('/:id', checkPeopleById)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)
module.exports = router
