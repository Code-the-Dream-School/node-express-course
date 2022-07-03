const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) =>{
  console.log(err)
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg:err.message })
  }
  return res.status(500).json({msg: `something went wrong`}) //or .json({msg: err}) for the long error message or a string msg`something went wrong`
}

module.exports = errorHandlerMiddleware