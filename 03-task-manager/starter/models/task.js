const mongoose = require(`mongoose`);

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide a Name"],
    trim: true,
    maxlength: [20, "Name must not exceed 20 characters."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(`Task`, TaskSchema);
