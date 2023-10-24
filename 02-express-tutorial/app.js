const express = require('express');
const app = express();

const { people } = require('./data');

app.get('/api/v1/people', (req, res) => {
    res.json(people);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
