

class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomeError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
}

module.exports = {createCustomeError, CustomAPIError}