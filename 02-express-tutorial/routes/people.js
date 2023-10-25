const express = require('express');
const router = express.Router();

const { people } = require('../data');

router.get('/', (req, res) => {
    res.status(200).json( {success: true, data: people} );
});

router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({ success: true, data: [...people] });
});

module.exports = router;