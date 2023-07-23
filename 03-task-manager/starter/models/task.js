const mongoose = require('mongoose');

// schema of how the task will look like
const TaskSchema = new mongoose.Schema({
  name: {
    type: String, 
    require: [true, 'You must provide a name'], 
    trim: true, 
    maxlength: [20, 'Name can not have more than 20 characters'],   
  }, 
  completed: {
    type: Boolean, 
    default: false, 
  },
}) 

module.exports = mongoose.model('Task', TaskSchema)