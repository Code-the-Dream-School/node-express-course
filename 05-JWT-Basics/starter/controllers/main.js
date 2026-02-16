require('dotenv').config()
const {BadRequest} = require('../errors')
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
  console.log("BODY:", req.body)
  console.log("JWT SECRET:", process.env.JWT_SECRET)

  const { username, password } = req.body || {}

  if (!username || !password) {
    throw new BadRequest('Please provide an email and password')
  }

  const id = new Date().getTime()

  const token = jwt.sign(
    { id, username },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  )

  res.status(200).json({
    msg: 'login successful',
    token
  })
}

const dashboard = async (req, res) => {
    console.log(req.user)
  const luckyNumber = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
  })
}

module.exports = {
  login,
  dashboard
}
