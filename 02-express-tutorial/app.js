const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/people', peopleRouter);
app.use('/', authRouter);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
