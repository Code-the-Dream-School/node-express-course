require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    //connected to the DB
    await connectDB(process.env.MONGO_URI);
    //clear DB
    await Product.deleteMany();
    //add product to the DB
    await Product.create(jsonProducts);
    console.log("Success");
    //command for terminal - instead ot ctrl+C if success
    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log("Success");
    //command for terminal - instead ot ctrl+C if not success
    process.exit(0);
  }
};

start();
