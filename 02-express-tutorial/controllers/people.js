const { people } = require("../data");

const getPeople = (req, res) => {
    return res.status(200).json(people);
};

const addPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a name" });
}

    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);

    return res.status(201).json({ success: true, data: newPerson });
};

module.exports = { getPeople, addPerson };
