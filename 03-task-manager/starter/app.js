const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();


// middleware
app.use(express.static('./public'));
app.use(errorHandlerMiddleware);
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);

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
