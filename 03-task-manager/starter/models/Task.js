const mongoose = require('mongoose');

/* setting up structure for all documents for mongoDB */
/* only properties set in schema will appear in database */


const TaskSchema = new mongoose.Schema({
    /* query validation */
    name: { //  checking for empty string 
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema);