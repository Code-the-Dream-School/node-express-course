const mongoose = require('mongoose')

const connectDB = (url) => {
    // returning a promise
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, // to avoid deprecation warning
        useUnifiedTopology: true 
    })
}

// removed the following then catch block from mongoose connect to make connectDB function and make sure database is connected before server runs.
// .then(() => console.log("Connected to the DB"))
// .catch(err => console.log(err))

module.exports = connectDB