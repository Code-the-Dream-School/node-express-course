const express = require('express');
const app = express();

const { people } = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

app.get('/api/v1/people', (req, res) => {
    res.status(200).json( {success: true, data: people} );
});

app.post('/api/v1/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: name });
    res.status(201).json( {success: true, person: name} );
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
