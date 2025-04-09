
const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getPersonById, updatePerson, deletePerson } = require("../controllers/people");

router.get("/", getPeople); // GET all people
router.post("/", addPerson); // POST a new person
router.get("/:id", getPersonById); // GET a specific person by ID
router.put("/:id", updatePerson); // PUT to update a person by ID
router.delete("/:id", deletePerson); // DELETE a person by ID

module.exports = router;
