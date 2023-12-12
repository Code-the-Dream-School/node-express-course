const jwt = require('jsonwebtoken')
// const CustomAPIError = require('../errors/custom-error')
const {BadRequestError} = require('../errors')

const logon = async (req, res) => {
    const { name, password } = req.body

    if (!name || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    const id = new Date().getDate()
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: process.env.LIFE_TIME })

    res.status(200).json({token })
}




const hello = async (req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        message: `Hello, ${req.user.name}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = { logon, hello }