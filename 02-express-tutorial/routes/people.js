const express = require("express");
const router = express.Router();
const { products,people } = require("../data");

const {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

router.get("/", getPeople);
router.post("/", addPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// router.post("/", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide a name" });
//   }
//   // Add new person to the people array
//   const newPerson = { id: people.length + 1, name: name };
//   people.push(newPerson);

//   // Send response
//   res.status(201).json({ success: true, person: newPerson });
// });

// // router.post("/login", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`);
//   }

//   res.status(401).send("Please Provide Credentials");
// });

