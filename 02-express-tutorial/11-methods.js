const express = require('express');
const app = express();
let { people } = require('./data');

/* HTTP Methods
    1. GET - Read Data
    2. POST - Insert Data
    3. PUT - Update Data
    4. DELETE - Delete Data
*/

/* static assets */
app.use(express.static('./methods-public'));

/* parse form data  - middlware function */
app.use(express.urlencoded({ extended: false }));

/* Parsed json*/
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ sucess: true, data: people });
})

/* adding data (names to front end) */
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide a name value' })

    }
    return res.status(201).json({ success: true, person: name });
})

/* testing another post route */
app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide a name value' })

    }
    return res.status(201).json({ success: true, data: [...people, name] });

})


/* working with post request */
app.post('/login', (req, res) => {
    /* error handeling empty/invalid inputs */
    /* if name exist */
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send('Please provide credentials ');
})


/** PUT method - updating json */
app.put('/api/people/:id', (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople });
})

/** DELETE method */
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params))
    return res.status(200).json({ success: true, data: newPeople })
})



app.listen(3000, () => {
    console.log('Listening to port 3000...');
});
