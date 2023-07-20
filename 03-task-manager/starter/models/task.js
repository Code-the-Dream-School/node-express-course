const mongoose = require('mongoose');

// schema of how the task will look like
const TaskSchema = new mongoose.Schema({
  name:String, completed:Boolean
}) 

module.exports = mongoose.model('Task', TaskSchema)