const CustomAPiError = require('../errors/custom-error')
const jwt = require("jsonwebtoken")
const{UnatuthenticatedError} = require('../errors')
const { StatusCodes} = require('http-status-codes')
const authenticationMiddleWare = async(req,res,next)=>{
   const authHeader = req.headers.authorization
   
     if (!authHeader || !authHeader.startsWith('Bearer ')) {
       throw new UnatuthenticatedError("No token procided")
     }
     const token = authHeader.split(' ')[1]
   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET)
     const{id,username} = decoded
     req.user = {id,username}
    next()
  } catch (error) {
   throw new UnatuthenticatedError('Not authorized to access this route')
  }
     
    next()
}

module.exports = authenticationMiddleWare