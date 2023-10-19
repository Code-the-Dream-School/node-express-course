//let's setup the structure for our future documents and assign them to the collection
//we are going to do it using schema and model from the mongoose

const mongoose = require("mongoose");

//мы устанавливаем структуру для нашего документа, которую мы будем запомниать в монгоДБ.
//in mongoose the model is a wrapper for the schema
//so if the schema defines the structure for the document like the type, validation and etc
//a mongoose model provides an interface to the database that very easy because the AOI is very straightforward
const TaskSchema = new mongoose.Schema({
  // name: String,
  //built-in validator:
  name: {
    type: String,
    // required:true
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"]
  },
  // completed: Boolean
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);

//only properties that we specified in our schema wii be passed to the database. everything else will be ignored

//validation  -позволяет определять, что мы можем пропустить в датабазу (например, не пропускать пустые строки)
