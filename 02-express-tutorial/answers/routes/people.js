'use strict';

const express = require('express'),
  router = express.Router(),
  {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
  } = require('../controllers/people');


// notice with http post with javascript we have no action and method attributes on the form
// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route(':id').put(updatePerson).delete(deletePerson);

module.exports = router;
