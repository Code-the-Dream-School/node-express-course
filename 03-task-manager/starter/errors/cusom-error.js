//constructor method invoke when theres a new instance of a class with message
class CustomApiError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode 
    }
}

const createCustomError = (msg, statusCode) => {
 return new CustomApiError(msg, statusCode)
}

module.exports = { createCustomError, CustomApiError }