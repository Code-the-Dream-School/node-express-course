const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use('/api/v1/people', express.static('./methods-public')); 
app.use('/api/v1', express.static('./public'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());
app.use(cookieParser());

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products'); 

app.use('/api/v1/people', peopleRouter);
app.use('/', authRouter);
app.use('/api/v1', productsRouter); 

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});



