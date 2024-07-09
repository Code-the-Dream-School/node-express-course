const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getID, deletePerson } = require("../controllers/people");

router.post(`/`, addPerson);
router.get(`/`, getPeople);
router.get("/:id", getID);
router.delete('/:id', deletePerson)

module.exports = router;
