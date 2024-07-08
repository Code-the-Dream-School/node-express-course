//Start here 7h54min - ALL THE PEOPLE ROUTES *numbered notes on this lesson 
//Entire reason for router is to set up these different logical paths 
//*1
const express = require('express');
//make a router instance that takes care of the routing middleware in express 
const router = express.Router()
//*2 change all app. to router. using command d selecting all and changing 

//LAST VIDEO 
const {
    getPeople, 
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')

//*4 this setup will change good for now.... make sure path is correct 
// let { people } = require('./data')

//*5 need to delete all the api/people in routes...

//read the data 
// router.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })
//*6 need to change this route duplicate DELETE ALL /api/people
// router.get('/', getPeople)
//     (req,res)=>{
//     res.status(200).json({success:true,data:people})
// })

//handle post from javascript.html using vanilla javascript and axios, when you run this headers say application json, so we need to add the content type, axios adds for us, usally we do this manually 
// router.post('/', createPerson)
//     (req, res) =>{
//     const { name } = req.body
//     if(!name){
//         return res
//         .status(400)
//         .json({success:false, msg: 'please provide a name value'})
//     }
//     res.status(201).json({success:true, person:name})
// })



//10 this is adding the person entered into the array we arent worrying about id yet database usually does it for us 
// router.post('/postman', createPersonPostman)
//     (req,res)=>{
//     const {name} = req.body
//     if(!name){
//         return res
//         .status(400)
//         .json({success:false, msg: 'please provide a name value'})
//     }
//     res.status(201).json({success:true, data: [...people]})
// })

//updating need an id or specific area, need the value from the req params, then we need to update it, so 2 parts!! 
// router.put('/:id', updatePerson)
//      (req, res) =>{
//     //params is id because thats what was intered in the address 
//     const {id} = req.params
//     const {name} = req.body
//       // people.find searched array 
//       const person = people.find((person)=>( person.id === Number(id)))
//       if(!person){
//         return res
//         //404 cant find the resource 
//         .status(404)
//         .json({success:false, msg: `No person with id: ${id}` })
//     }
//     //NOW - iterate over the array update the name with the name provided in the body, the new array is now called newPeople
//     const newPeople = people.map((person)=>{
//         if(person.id === Number(id)){
//             //this is the name from the body 
//             person.name = name
//         }
//         return person
//     })
//     //send back the new array 
//     res.status(200).json({success: true, data: newPeople})
// })

//11- extremely similar to put 
// router.delete('/:id', deletePerson)
// (req, res)=>{
//     const person = people.find((person)=>( person.id === Number(req.params.id)))
//       if(!person){
//         return res
//         //404 cant find the resource 
//         .status(404)
//         .json({success:false, msg: `No person with id: ${req.params.id}` })
//     }
//         const newPeople = people.filter((person)=>{
//             person.id !== Number(req.params.id)
//         });
//         return res.status(200).json({sucess:true, data:newPeople })
// })

//*3 now add to the original 


// END of video - flavor 1 
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

//flavor #2 functionality is the SAME 
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router 