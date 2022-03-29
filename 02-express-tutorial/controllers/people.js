let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) =>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please provide a name'})
    }
    res.status(201).send({success: true, person: name})
}

const creatPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg: 'Please provide a name'})
    }
    res.status(201).send({success: true, data: [...people, name]})
}

const updatePerson =  (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if (!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with an id of ${id} has been found`})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople,  msg: `${name} has been saved`})
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with an id of ${req.params.id} has been found`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json({success: true, data: newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    creatPersonPostman,
    updatePerson,
    deletePerson
}