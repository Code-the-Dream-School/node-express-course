const express = require('express');
const app = express();
let { people } = require('./data')

//methods go here and we can put in a public file ex methods-public/ MUST have we cant just post to the browser!!!
app.use(express.static('./methods-public'))

//parse form data with middleware - why? Express Docs  urlencoded built in middleware based on the body parser 
app.use(express.urlencoded({extended:false}))

//7-This is to handle the post JSON data need another middleware
app.use(express.json())

//read the data 
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//handle post from javascript.html using vanilla javascript and axios, when you run this headers say application json, so we need to add the content type, axios adds for us, usally we do this manually 
app.post('api/people', (req, res) =>{
    const { name } = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name value'})
    }
    res.status(201).json({success:true, person:name})
})

//add data/insert data- use post data / name came from the form 
app.post('/login', (req, res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome, ${name}`)
    }
    res.status(401).send('POST')
})

//
app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name value'})
    }
    res.status(201).json({success:true, data: [...people]})
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000....')
});


//1
//OBJECTIVE - read these people and use a post to add people 
// const people = [
//     { id: 1, name: 'john' },
//     { id: 2, name: 'peter' },
//     { id: 3, name: 'susan' },
//     { id: 4, name: 'anna' },
//     { id: 5, name: 'emma' },
//   ]
//   module.exports = { products, people }

//2 Before we post, checkout HTML in methods-public and look at form action
//action is '/login'method post 
// <form action="/login" method="POST">

//3If you type in broswer localhostblah/login - theres an error but shows up as a post 
//BODY is crucial!!! 

//4 Make the post request, but the new people arent showing up! Why? Still need middleware!! 
//add app.use(express.urlencoded())

//5 consosle.log(req.body) in /login post and res.send('POST')

//6 add logic, if name is provided you will give back the name, and say welcome name 
//  the point is to show you how to handle this server side logic 

//BEFORE 6
// app.post('/login', (req, res) =>{
//     res.status(200).json({sucess:true, data:people})
//     console.log(req.body)
//     res.send('POST')
//     })

//After 6 
// app.post('/login', (req, res) =>{
//     const {name} = req.body;
//     if(name){
//         return res.status(200).send(`Welcome, ${name}`)
//     }
//     res.status(401).send('POST')
// })

//look in network, under headers, we have the form url encoded, for reference/

//7  look at javascript approach, in HTML checkout the form with h3 Javascript Form 
//use axios in script - with CDN link 
// javascript HTML where we are looking 
//const fetchPeople, axios can do a get 

//BEFORE 
// app.post('api/people', (req, res) =>{
//     res.status(201).send(success)
// })

//After with post logic 
//see above 

//8 Next new tool to help with post and other requests
//Problem - This is going to be SLOW - better option is POSTMAN is awesome for quickly testing API's 
//Postman is a pretool - REQUIRED WHY? Helps us test without having to make the entire frontend before testing 
//Download and add to application folder
//GET
//enter route GET  localhost:5000/api/people - data will show up!
//POST 
//enter route POST  localhost:5000/api/people - data will show up!
//hit body, then hit raw, change text to json far right
// set up body enter in box =  {'name': 'john'}
//hit send 
//get the body = {'success':true, 'person':'john'}
//this is the way it was set up.json in the post 
//reference =     res.status(201).json({success:true, person:name})
//test for the error send {'name': ''}
//get {'success':false, 'msg': 'please provide name'}

//9 - new post setup 