const mongoose = require("mongoose");

console.log("CONNECT FILE LOADED:", __filename)

const connectDB = (url) => {
    return mongoose.connect(url);
};

module.exports = connectDB;
