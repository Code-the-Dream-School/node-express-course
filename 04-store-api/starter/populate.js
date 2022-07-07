require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
  try{
    const connectionString =
    `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    await connectDB(connectionString)
    await Product.deleteMany();
    await Product.create(jsonProducts)
    console.log('Success')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()