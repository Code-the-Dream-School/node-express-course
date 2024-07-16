const mongoose = require('mongoose');

//this sets up how we want our data //EVERYTHING ELSE except these two will be ignored!!! 
const TaskSchema = new mongoose.Schema(
    {
        name:String,completed:Boolean
    }
)

module.exports = mongoose.model('Task', TaskSchema)

//thik of model as representation of the data this makes CRUD easy
//now we need to go to our controllers and start using the model 