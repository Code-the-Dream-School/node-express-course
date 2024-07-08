//NEXT we are making a conrollers folder and splitting files again

const express = require('express');
const app = express();

//the normal path not mine in notes 
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('api/people', people)
// Save at this point, but, PROBLEM!! = we have duplicate paths with api/people, need to delete that in the other file!! 

app.use('/login', auth)

// app.post('/login', (req, res) =>{
//     const {name} = req.body;
//     if(name){
//         return res.status(200).send(`Welcome, ${name}`)
//     }
//     res.status(401).send('POST')
// })

app.listen(5000, ()=>{
    console.log('Server listening on port 5000....')
})
