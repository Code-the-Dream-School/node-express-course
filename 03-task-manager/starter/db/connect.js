const mongoose = require('mongoose')
const connectionString = "mongodb+srv://NodeExpressDB:Pwdpsrv123@nodeexpressprojects.yqaxcjt.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"

const connectDB =(url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
})}
module.exports = connectDB
