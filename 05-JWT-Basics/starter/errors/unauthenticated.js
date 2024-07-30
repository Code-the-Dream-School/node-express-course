
const CustomAPIError = require('./custom-error')
const { StatusCode } = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCode.UNAUTHORIZED
    }
  }
  
  module.exports = UnauthenticatedError
  