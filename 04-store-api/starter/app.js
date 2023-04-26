require('dotenv').config();
// async errors
require('express-async-errors');

const express = require('express'),
  app = express();

const notFoundMiddleware = require('./answers/middleware/not-found'),
  errorMiddleware = require('./answers/middleware/error-handler');

const connectDB = require('./answers/db/connect');
const productRouter = require('./answers/routes/products');

// middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
});

app.use('/api/v1/products', productRouter);
// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    // why does the instructor not use a callback function?
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`)
    });
  } catch (error) {
    console.log(error);
  }
}

start();
