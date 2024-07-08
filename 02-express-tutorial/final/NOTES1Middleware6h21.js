//VIDEO 1- Week 4- 6:10 to 

const express = require('express');
const app = express();
const logger = require('./NOTES2Logger')
const authorize = require('./NOTES3Authorize629')
//morgan middleware 
// const morgan = require('morgan')
// req => middleware =>res
//req comes in we do somthing with functionality, then we send out the response 
//express uses the next 
//when you work with middleware must work with the next 
// const logger = (req, res, next) => {
//     const method = req.method; 
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     // NOT TO USE res.send('Testing');
//     // NOT TO USE must invoke next() or res.send() here 
//     next();
// }


//If we want this to happen again in about we have to re-write it again.... BETTER make a function, go above both routes make a function   
// app.get('/', (req, res)=>{
//     const method = req.method; 
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     res.send('Home')
// })

//long way to write logger manually for all
// app.get('/about', logger, (req, res) => {
//     res.send('About')
// })

//means all routes use the logger middleware - ORDER MATTERS - at the top - Can add a path no path everywhere
// app.use(logger) JUST ONE 
//if path is applied it applies to anthing with api, example products and items 
// app.use('/api', logger)
//two app.use inside array, ordermatters which ever is first executes first 
// app.use( [logger, authorize])

//use express as our middlware - has a method in the source code called static, public means publically available 
app.use(express.static('./public'))
//now just run npm start to run the app 
// app.use(morgan('tiny'))

app.get('/', (req, res) => {
    //logger is the middleware 
    res.send('Home')

})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items',[logger, authorize],(req, res) => {
    res.send('Items')
    console.log(req.user);
})

// app.get('/api/items',(req, res) => {
//     res.send('Items')
//     console.log(req.user);
// })

app.listen(5000, ()=>{
    console.log('Server listening on port 5000....')
});

//In next video 2 called logger.js 
//How do we use looger everywhere? - could do this manually, better solution, remove them all, use app.use(logger)
//file 10 