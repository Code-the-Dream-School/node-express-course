const express = require('express');

const router = express.Router()

//delete the /login and change app to router 
router.post('/', (req, res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome, ${name}`)
    }
    res.status(401).send('POST')
})

module.exports = router 