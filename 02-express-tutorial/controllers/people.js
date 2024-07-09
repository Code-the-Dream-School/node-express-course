const { people } = require("../data");

const getPeople = (req, res) => {
  return res.status(200).json({ people });
};

const getID = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: "No ID matching request." });
  } else {
    return res.status(200).json(person);
  }
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name." });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    return res.status(201).json({ success: true, name: req.body.name });
  }
};

const deletePerson = (req, res) => {
  const deletePerson = people.find(
    (person) => person.id === Number(req.params.id)
  );
  if (!deletePerson) {
    return res
      .status(404)
      .json({ success: false, message: "No ID matching request." });
  } else {
    const editedPeople = people.filter((person) => person !== deletePerson);
    return res.status(200).json({ success: true, data: editedPeople });
  }
};

module.exports = { addPerson, getPeople, getID, deletePerson };
