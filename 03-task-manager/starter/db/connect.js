//npm install mongodb

const mongoose = require('mongoose')
require('dotenv').config();


const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        })
        .then(() => {
            console.log("Connected to the DB...");
        })
        .catch(err => {
            console.error("Database connection Error: ", err);
        })
}

module.exports = connectDB 

