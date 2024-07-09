// console.log('Inside the Express Tutorial')
const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// let {products} = require('./data')
// const logger = require('./logger')
// const authorize = require('./authorize')

//MIDDLEWARE FUNCTIONS 
//use logger middleware on every page 
// app.use([logger, authorize])
//static assets
app.use(express.static('./methods-public'))

//Parse data and add to req.body this is for post Middleware- built in based on body parser, extended QS-library when true
app.use(express.urlencoded({ extended: false }));
//This Middleware will parse JSON
app.use(express.json());
//Router stuff
app.use('/api/v1/people', people)
app.use('/login', auth)

//GET POST PUT DELETE 
app.get('/', (req,res)=>{
    res.send('Home')
    console.log(req.user)
})


app.listen(5000, ()=>{
    console.log('Server listening on port 5000....')
});

// let { products } = require('./data')
// let { people } = require('./data')

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Q1- way 1
// app.get('/', logger, (req, res) => {
//     res.send('Home')
//  });

// Q2-way2 with 2 paths 
//  app.use(['/', '/about'], logger);
 //Q2- use for all 
//  app.use(logger);

//ORDER matters these called first 

// app.get('/api/v1/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })

// app.post('/api/v1/people', (req, res) =>{
//     const { name } = req.body
//     if(!name){
//         return res
//         .status(400)
//         ({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });


// const logger = (req, res, next) => {
//     const method = req.method; 
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     // res.send('Testing');
//     //must invoke next() or res.send() here 
//     next();
// }


//Q1 Middleware set up 
// app.get('/', logger, (req, res) => {
//     ...
// })
// app.use(["/path1", "/path2"], logger);
//Q2 log the method and url properties from the req object, as well as the current time, before calling next()
//app.use called first before get and post, and 
//Q3- implement some API's 
//Q4- import in the products and people from the data files
//Q5-  res.status(400).json({ success: false, message: "Please provide a name" });
//Q5 -   people.push({ id: people.length + 1, name: req.body.name });
    // res.status(201).json({ success: true, name: req.body.name });
//Q6 Change the directory for your static serving from ./public to ./methods-public, and try out that frontend from your browser.
//Q7- Refactor code - routes/people.js add these 
// const express = require("express");
// const router = express.Router();
//const { addPerson, getPeople } = require("../controllers/people.js");