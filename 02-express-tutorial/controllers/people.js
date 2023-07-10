const { people } = require('../data');

// api implementation (GET)
const getPeople = (req, res) => {
  res.json(people);
};

// api implementation (POST)
const addPerson = (req, res) => {
  if (req.body.name) {
    people.push({ id: people.length, name: req.body.name });
    return res.status(201).json({ success: true, name: req.body.name });
  }
  res.status(400).json({ success: false, message: 'Please provide a name' });
};

// api implementation (GET)
// finds the person by ID. Example: http://localhost:5000/api/v1/people/3
const getPersonById = (req, res) => {
  const idToFind = parseInt(req.params.id) // because this will be a string, and we need an integer
  const person = people.find((p) => p.id === idToFind)
  if (!person) { // if the person does not exist 
    return res.status(404).json({message: "Unfortunately, that person was not found :("});
  }
  res.json(person);
};

// api implementation (PUT)
// updates the person by ID. Example: http://localhost:5000/api/v1/people/3 and write in a json body a {name: "updatedName"}
const updatePersonById = (req, res) => {
  const idToUpdate = parseInt(req.params.id);
  const { name } = req.body;
  const person = people.find((p) => p.id === idToUpdate);
  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }
  person.name = name;
  res.json({ success: true, message: 'Person updated successfully' });
};

// api implementation (DELETE)
// deletes the person by ID. Example: http://localhost:5000/api/v1/people/3
const deletePersonById = (req, res) => {
  const idToDelete = parseInt(req.params.id);
  const updatedPeople = people.filter((person) => person.id !== idToDelete);
  if (updatedPeople.length === people.length) {
    return res.status(404).json({ message: 'Person not found' });
  }
  
  // Update the people array with the updatedPeople array
  people.length = 0;
  people.push(...updatedPeople);
  res.json({ success: true, message: 'Person deleted successfully' });
};

module.exports = { addPerson, getPeople, getPersonById, updatePersonById, deletePersonById };