const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);
router.post("/", addPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
