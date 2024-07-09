const express = require("express");
const router = express.Router();
//This will change eventually - two levels up 
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people.js')


// const { addPerson, getPeople } = require("../controllers/people.js");

// { name: nameValue } nameValue = input.value 

//ONE WAY 
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

//BETTER MORE CONCISE WAY CHAINING 
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router 