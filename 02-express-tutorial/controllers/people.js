const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json( {success: true, data: people} );
};

const getPerson = (req, res) => {
    const { id } = req.params;
    const person = people.find(person=> person.id === Number(id));
    if (!person) {
        return res  
            .status(400)
            .json({ success: false, message: `No person is found with id ${id}` });
    }
    return res.status(200).json({ success: true, data: person });
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: name });
    return res.status(201).json({ success: true, data: [...people] });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(person=> person.id === Number(id));
    if (!person) {
        return res  
            .status(400)
            .json({ success: false, message: `No person is found with id ${id}` });
    }
    const newPeople = people.map(person=> {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    return res.status(200).json( {success: true, data: newPeople} );
};

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find(person=> person.id === Number(id));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, message: `No person is found with id ${id}` });
    }
    const newPeople = people.filter(person => person.id !== Number(id));
    return res.status(200).json( {success: true, data: newPeople} );
};

module.exports = {
    getPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
};