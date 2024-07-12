console.log("Task Manager App");

const express = require(`express`);
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require(`./db/connect`);
require(`dotenv`).config();

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use(`/api/v1/tasks`, tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // @ts-ignore
    app.listen(port, console.log(`Server is Listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

// TODO:
// Current Video Time: 1hr:28m
