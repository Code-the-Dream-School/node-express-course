const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');

// router.get('/', getPeople)

// /* adding data (names to front end) */
// router.post('/', createPerson)

// router.post('/postman', createPersonPostman)

// /** PUT method - updating json */
// router.put('/:id', updatePerson)

// /** DELETE method */
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;