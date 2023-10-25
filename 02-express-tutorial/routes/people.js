const express = require('express');
const router = express.Router();

const {
    getPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people');

router.get('/', getPeople);
router.get('/:id', getPerson);
router.post('/', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;