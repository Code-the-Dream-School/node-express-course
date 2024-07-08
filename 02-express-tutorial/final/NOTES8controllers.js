//Model/View/Controllers
//make inside the controllers folder, a people.js 
//people

let { people } = require('./data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true, data:people})
}


const createPerson = (req, res) =>{
    const { name } = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name value'})
    }
    res.status(201).json({success:true, person:name})
}

const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name value'})
    }
    res.status(201).json({success:true, data: [...people]})
}

const updatePerson = (req, res) =>{
    //params is id because thats what was intered in the address 
    const {id} = req.params
    const {name} = req.body
      // people.find searched array 
      const person = people.find((person)=>( person.id === Number(id)))
      if(!person){
        return res
        //404 cant find the resource 
        .status(404)
        .json({success:false, msg: `No person with id: ${id}` })
    }
    //NOW - iterate over the array update the name with the name provided in the body, the new array is now called newPeople
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            //this is the name from the body 
            person.name = name
        }
        return person
    })
    //send back the new array 
    res.status(200).json({success: true, data: newPeople})
}

const deletePerson = (req, res)=>{
    const person = people.find((person)=>( person.id === Number(req.params.id)))
      if(!person){
        return res
        //404 cant find the resource 
        .status(404)
        .json({success:false, msg: `No person with id: ${req.params.id}` })
    }
        const newPeople = people.filter((person)=>{
            person.id !== Number(req.params.id)
        });
        return res.status(200).json({sucess:true, data:newPeople })
}

module.exports = {
    getPeople, 
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
}