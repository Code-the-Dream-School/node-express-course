const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

getPerson = (req, res) => {
  const id = parseInt(req.params.id); // convert a string to an integer
  const person = people.find(person => person.id === id);
  if (!person) {
    return res.status(404).json({ message: "There is no this person" });
  }
  return res.status(200).json(person);
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
};

updatePerson = (req, res) => {
  const person = people.find(person => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.map(person => {
    if (person.id === Number(req.params.id)) {
      person.name = req.body.name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

deletePerson = (req, res) => {
  const person = people.find(person => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    person => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson
};
