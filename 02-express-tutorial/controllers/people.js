const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json( {success: true, data: people} );
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({ success: true, data: [...people] });
};

module.exports = {
    getPeople,
    addPerson,
};