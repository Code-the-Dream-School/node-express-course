const mongoose = require('mongoose')


//need to make it access from anywhere or problem specific to heroku 
//npm install mongodb
//added the password and added between this  / and this ? 03-TASK-MANAGER

//this returns a promise then callback 
const connectDB = (url) => {
return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
})
}

module.exports = connectDB

//npm install dotenv - 