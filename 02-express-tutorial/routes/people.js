const express = require('express');
const router = express.Router();
const { addPerson, getPeople, getPersonById, updatePersonById, deletePersonById } = require('../controllers/people.js')

// api implementation (GET)
router.get('/', getPeople);

// searching a person by ID
router.get('/:id', getPersonById);


// api implementation (POST)
router.post('/', addPerson);

// api implementation (PUT)
router.put('/:id', updatePersonById);

// api implementation (DELETE)
router.delete('/:id', deletePersonById);

module.exports = router;


