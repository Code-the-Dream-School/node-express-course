//fn can be called whatever you want, avoid try catch 
//next will be a middleware
const asyncWrapper = (fn) => {
return async (req,res,next) => {
try{
await fn(req, res,next)
}catch(error){
    next(error)
}
}
}

module.exports = asyncWrapper