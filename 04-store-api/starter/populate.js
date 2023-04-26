'use strict';

require('dotenv').config();
const connectDB = require('./answers/db/connect');

const Product = require('./answers/models/products');

const productsJSON = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsJSON);
    console.log('Success.');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(12);
  } 
};

start();

