const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

//	req => middleware => response

/*
 * This middleware will apply logger to all functions *
    1. the app.use(logger) function will only apply to functions 
        AFTER it is called
    2. Once app.use(logger) is called to the root file, 
        it is applied to all proceeding it
    3. Ex. if the function is applied to /api - it will also aplpy to
        files in /api/about/home etc...

* options for middleware *
   1. use vs route
   2. options - our own / express / third party
   3. 
*/

// app.use([logger, authorize]);
// app.use(express.static('./public'));
// Morgan is third party middleware that does similar functions as logger
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/product/', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user);
    res.send('Items')
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
});
