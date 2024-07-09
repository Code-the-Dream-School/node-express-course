let {people} =require('../data')

const getPeople = (req,res) => {
    res.status(200).json({success:true,data:people})
    res.send('v1 people')
}

const createPerson = (req, res)=>{
    // enabled by middleware 
    const { name } = req.body
    if (!name) {
        return res
        .status(400)
        .json({ success: false, message: "Please provide a name" });
        }
        res.status(201).json({sucess:true, person:name})
}

const createPersonPostman = (req, res)=>{
    const { name } = req.body
    if (!name) {
        return res
        .status(400)
        .json({ success: false, message: "Please provide a name" });
        }
        res.status(201).json({sucess:true, data: [...people, name]})
}
const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
          person.name = name
        }
        return person
      })
    if (!person) {
        people.push({ id: people.length + 1, name: name });
        res.status(200).json({ success: true, data: newPeople })
    }
    res.status(200).json({ success: true, data: newPeople })
  }

  const deletePerson = (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  }

  module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}