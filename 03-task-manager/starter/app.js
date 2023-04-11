'use strict';

const express = require('express'),
  app = express(),
  tasks = require('../starter/answers/routes/tasks'),
  connectDB = require('../starter/answers/controllers/db/connect');
  require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

// routes to create for our Tasks API
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

app.set('port', process.env.PORT || 3000);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(app.get('port'), () => {
      console.log(`Server listening on http://localhost:${app.get('port')}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

