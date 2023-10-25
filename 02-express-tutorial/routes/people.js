const express = require('express');
const router = express.Router();

const {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people');

router.get('/', getPeople);
router.post('/', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;