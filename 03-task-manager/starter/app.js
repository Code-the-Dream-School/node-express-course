// require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task manager App');
// });

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')        - get all task
// app.post('/api/v1/tasks')       - create new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();

// app.listen(port, console.log(`Server is listening on port ${port}...`));
