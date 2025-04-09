// controllers/people.js
const { people } = require("../data");

const getPeople = (req, res) => {
    res.status(200).json(people);
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    return res.status(201).json({ success: true, name });
};

const getPersonById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === id);

    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }

    return res.status(200).json(person);
};

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === id);

    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    person.name = name; // Update the person's name
    return res.status(200).json({ success: true, name: person.name });
};

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const personIndex = people.findIndex(p => p.id === id);

    if (personIndex === -1) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }

    people.splice(personIndex, 1); // Remove the person from the array
    return res.status(200).json({ success: true, message: "Person deleted successfully" });
};

module.exports = { addPerson, getPeople, getPersonById, updatePerson, deletePerson };
