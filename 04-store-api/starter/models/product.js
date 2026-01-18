const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name must be provided']
    },
    price:{
        type:String,
        required:[true,'Product price must be provided']
    },
    featured: {
        type: Boolean,
        default:false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE is not supported}'
        }
    },
})

module.exports = mongoose.model('Product', productSchema)
