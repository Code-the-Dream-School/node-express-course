const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, 'Must provide a name!'],
		trim: true,
		minlength: [3, 'name must be more than 3 characters'],
		maxlength: [20, 'name cannot be more than 20 characters'],
	},

	completed: {
		type: Boolean,
		default: false,
	},
})

module.exports = mongoose.model('Task', TaskSchema)
