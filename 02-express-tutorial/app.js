const express = require('express');
const app = express();

const people = require('./route/people')
const auth = require('./route/auth')

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

/* middleware  */
app.use('/api/people', people);
app.use('/login', auth);


app.listen(3000, () => {
	console.log('Listening to port 3000...');
});
