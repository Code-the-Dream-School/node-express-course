const express = require("express");
const path = require('path');
const app = express(); 
const { products } = require('./data');
const cookieParser = require("cookie-parser");

const logger = function(req, res, next) {
  console.log(`Method: ${req.method}`)
  console.log(`URL: ${req.url}`)
  console.log(`Time: ${new Date()}`);
  next()
};

// for Front-end
app.use(express.static('./methods-public'));

// cookies (additional assignment)
app.use(cookieParser());
// for POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const auth = function(req, res, next) {
  if (req.cookies.name) {
    req.user = req.cookies.name;
    next();
  }
  res.status(401).json({message: "unauthorized"});
};

app.post('/logon', (req, res) => {
  const { name } = req.body;

  if (name) { // if user exists
    res.cookie("name:", name);
    res.status(201).json({message:`Hello ${name}`}); // Hello User
  }
  res.status(400).json({message:"ERROR: Name is required"});
}); 

app.delete('/logoff', (req, res) => {
  res.clearCookie("name");
  res.status(200).json({message: "User is logged off"});
});

app.get('/test', auth, (req, res) => {
  res.status(200).json({message: `Welcome, ${req.user}`});
});
// end of optional assignment


const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);

// logger confirmation if it works (it does )
app.get('/', logger, (req, res) => {
  res.json({logger})
});

// api implementation (GET)
app.get('/api/v1/test', (req, res) => {
  res.json({message: 'It worked!' });
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID) // because this will be a string, and we need an integer
  const product = products.find((p) => p.id === idToFind)
  if (!product) { // if the product does not exist 
    return res.status(404).json({message: "Unfortunately, that product was not found :("});
  }
  res.json(product);
});

app.get('/api/v1/query', (req, res) => {  
  let filtered = [...products];

  if (req.query.search) { // return products based on their starting letters
    filtered = filtered.filter((product) => {
      return product.name.toLowerCase().startsWith(req.query.search.toLowerCase());
    });
  }
  if (req.query.limit) {  // return products with id's less or equal to the "limit" 
    filtered = filtered.slice(0, parseInt(req.query.limit));
  }
  
  if (req.query.price) {  // return products that do not exceed the given price
    filtered = filtered.filter((product) => {
      return product.price < parseFloat(req.query.price);
    });
  }
  res.json(filtered); // showcases the products that were filtered
});

// end of api implementation

app.get('/', (req, res) => {
  console.log('User is on the Home Page')
  res.status(200).send('Home Page')
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>The resource is not found</h1>')
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
});

console.log('Express Tutorial')
