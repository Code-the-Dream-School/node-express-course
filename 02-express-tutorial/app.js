const express = require('express');
const app = express();

const peopleRouter = require('./routes/people')

app.use(express.static('./methods-public'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

app.use('/api/v1/people', peopleRouter);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
