const { people } = require("../data");
//show all people
const getPeople = (req, res) => {
  res.json(people);
};
//add a person
const addPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
  people.push({ id: people.length + 1, name: name });
  res.status(201).json({ success: true, name: name });
};
//find a person
const getPerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (person) {
    res.status(200).json({ success: true, data: person });
  } else {
    res
      .status(404)
      .json({ success: false, data: "Could not find a person with that id" });
  }
};
//update a person
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });

  if (person) {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  } else {
    res
      .status(404)
      .json({ success: false, data: "Could not find a person with that id" });
  }
};
//delete a person
const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (person) {
    const newPeople = people.filter((person) => {
      return person.id !== Number(id);
    });
    res.status(200).json({ success: true, data: newPeople });
  } else {
    res
      .status(404)
      .json({ success: false, data: "Could not find a person with that id" });
  }
};

module.exports = {
  getPeople,
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
