const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'must be a number'],
        trim: true,
        min: [0, 'price must be a positive number']
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
        
    },
});


module.exports = mongoose.model('Products', productsSchema);