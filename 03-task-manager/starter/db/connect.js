const mongoose = require('mongoose')
const connectionString = "mongodb+srv://NodeExpressDB:Pwdpsrv123@nodeexpressprojects.yqaxcjt.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"
                            // mongodb+srv://NodeExpressDB:<password>@nodeexpressprojects.yqaxcjt.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects


const connectDB =(url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
})}
module.exports = connectDB


// mongoose.connect(connectionString)
// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((err) => console.log(err));
// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((err) => console.log(err));