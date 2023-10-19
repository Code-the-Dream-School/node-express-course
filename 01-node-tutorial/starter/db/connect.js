const mongoose = require('mongoose')

// const connectionString = "mongodb+srv://pestovaav:MoRz6ApgZY4Ee0OO@cluster0.yibg2t8.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"


//to avoid connection to port 3000 and then to DB we need to create this function

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}
//second part only for mongoose<6
// mongoose.connect(connectionString,
//    { useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true}).then(()=>console.log("Connected to DB...")).catch((err)=>console.log(err))

module.exports = connectDB
