
const {CustomAPIError} = require("../errors/custom-error")
const errorhandlermiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode)
    }
    return res.status(err.status).json({msg:"Something went wrong, please try again"})
}
module.exports = errorhandlermiddleware