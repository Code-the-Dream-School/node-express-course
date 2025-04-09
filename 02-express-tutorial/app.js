const express = require('express'); 
const { products, people } = require("./data");
const peopleRouter = require("./routes/people");
const cookieParser = require('cookie-parser');

const logger=(req,res,next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next();
};

const app = express();  
app.use(express.static('./methods-public'));

app.use(logger);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/people", peopleRouter);



app.get('/api/v1/test' , (req, res) => {
    res.json({ message: "It worked!" });
  });

app.get('/api/v1/products', (req, res) => {
    res.json(products);
  });

  app.get('/api/v1/products/:productID', (req, res) => {

    const idToFind = parseInt(req.params.productID); 

    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        // If the product doesn't exist, return a 404 status with the error message
        return res.status(404).json({ message: "That product was not found." });
      }

    res.json(product);
  });

  app.get('/api/v1/query', (req, res) => {

    const { search = '', limit = 10, maxPrice  } = req.query;
    const limitValue = parseInt(limit, 10);
  
    let filteredProducts = products.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()));

    if (maxPrice) {
        const maxPriceValue = parseFloat(maxPrice);
        filteredProducts = filteredProducts.filter(p => p.price < maxPriceValue);
      }
  
    const limitedProducts = filteredProducts.slice(0, limitValue);
  
    // Return the filtered and limited products
    res.json(limitedProducts);
  });
 

// Auth middleware
  function auth(req, res, next) {
    if (req.cookies.name) {
        req.user = req.cookies.name;  // Set user from cookie
        return next();  // Proceed to next middleware or route
    } else {
        return res.status(401).json({ message: 'unauthorized' });  // Unauthorized response
    }
}

// Logon route
app.post('/logon', (req, res) => {
    if (req.body.name) {
        res.cookie('name', req.body.name);  // Set a cookie for the user's name
        return res.status(201).json({ message: `Hello, ${req.body.name}` });  // Send a response with a welcome message
    } else {
        return res.status(400).json({ message: 'Please provide a name' });  // Error if name is missing
    }
});

// Logoff route
app.delete('/logoff', (req, res) => {
    res.clearCookie('name');  // Clear the cookie
    return res.status(200).json({ message: 'You are logged off' });  // Send a message indicating the user is logged off
});

// Test route with authentication
app.get('/test', auth, (req, res) => {
    return res.status(200).json({ message: `Welcome, ${req.user}` });  // Return a welcome message with the user's name
});

   

  app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
  });

 

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});