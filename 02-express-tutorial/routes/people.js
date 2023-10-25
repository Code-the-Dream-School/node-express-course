const express = require('express');
const router = express.Router();

const {
    getPeople,
    addPerson,
} = require('../controllers/people');

router.get('/', getPeople);
router.post('/', addPerson);

module.exports = router;