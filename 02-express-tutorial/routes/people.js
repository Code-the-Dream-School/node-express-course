const express = require('express')
const router = express.Router()
const { products, people } = require('../data')
const { addPerson, getPeople,getPerson, putPerson, delPerson} = require('../controllers/people.js')



router.get('/', (req,res) => {
    getPeople(req,res)
})
router.get('/:id', (req,res) => {
    getPerson(req,res)
})
router.post('/', (req,res) => {
    addPerson(req,res)
})
router.put('/:id', (req,res) => {
    putPerson(req,res)
})
router.delete('/:id', (req,res) => {
    delPerson(req,res)
})


module.exports = router;