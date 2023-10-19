//at the end of this project we will learn how to set up an connect to the cloud database
//and also learn how to perform all the crowd operations and crud stands for create, read, update and delete on our data
//for our course we will use noSQL (non relational database) - MongoDB
//unlike traditional databases where we have rows and columns, in MongoDB we can simply store everything as JSON
//and technically no matter how the data relates to each other
//instead of tables we have collections (group of items) and instead of rows we have documents (which represent single item)
//document - is a set of key-value pairs

//for using database we can use native mongoDB driver  but very popular alternative - package name mongoose - object data modeling library
//у этого package очень много предустановленных опций, позволяющее девелопмент быстрее осуществлятью у него straightforward API
//an it does all heavylifted for us - npm install mongoose (в текущей версии luck of deprication warnings)

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config({ path: "../.env" });
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task manager app");
// });

app.use("/api/v1/tasks", tasks);

///api/v1/ - this is a convention
//app.get("/api/v1/tasks")           -get all the tasks
//app.post("/api/v1/tasks")          -create a new tasks
//app.get("/api/v1/tasks/:id")       -get a single tasks
//app.patch("/api/v1/tasks/:id")     -update the task
//app.delete("/api/v1/tasks/:id")    -delete the task

//handle 404
app.use(notFound);
app.use(errorHandlerMiddleware);
//для разработки хардкодить порт - нормально, но во время деплоймента порты могут быть разные, поэтому
//эта информация будет храниться в .env, и, если нет, то будем запускать с порта захардкоженого
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
