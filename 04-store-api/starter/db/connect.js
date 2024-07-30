const mongoose = require('mongoose');
const Product = require('../models/product');

const connectDB = (url) => {
  return mongoose
      .connect(url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      })
      .then(() => {
          console.log("Connected to the DB...");
      })
      .catch(err => {
          console.error("Database connection Error: ", err);
      });
}

// const newProduct = new Product({
//   name: 'apple',
//   price: 3
// });

// newProduct.save()
//     .then(() => console.log('Product saved!!'))
//     .catch(err => console.log('Error saving product: ', err));

module.exports = connectDB
