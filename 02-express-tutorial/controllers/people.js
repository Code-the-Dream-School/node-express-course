const {people} = require('../data')

const getPeople = (req,res) => {
    res.status(200).json({success: true, data: people})
}

const addPerson = (req,res) => {
    if(req.body){
        people.push({id: people.length, name: req.body.name})
        res.status(201).json({success: true, name: req.body.name})
    }else{
        res.status(400).json({success: false, message: 'Please provide a name'})
    }
}
const getPerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(person){
        res.status(200).json(person)
    }else{
        res.status(404).json({success: false, msg: `No such person with id ${req.params.id}`})
    }
}

const putPerson = (req,res) => {
    const {id} = req.param.id
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person){
        res.status(404).json({success: false, msg: `Person not found with id ${id}`})
    }else{
        const newPeople = people.map((person) => {
            if(person.id ===  id){
                person.name = name
            }
            return person
        })
        res.status(200).json({success: true, data: newPeople})
    }
}

const delPerson = (req, res) => {
    const {id} = req.param.id
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        res
        .status(404)
        .json({success: false, msg: `No such person with id ${id}`})
    }else{
        const newPeople = people.filter((person) => person.id !==  Number(id))
        return res.status(200).json({success: true, data: newPeople})
    }
}

module.exports = {addPerson, getPeople, getPerson, putPerson, delPerson}