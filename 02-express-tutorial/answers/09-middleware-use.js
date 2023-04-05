"use strict";

const express = require('express'),
  app = express(),
  logger = require('./logger'),
  authorize = require('./authorize');

app.set('port', process.env.PORT || 5000);

// req => middleware => res

// if you omit the path, middleware will be applied to all your routes
// for multiple middleware, save them in an array and the order matters
app.use([logger, authorize]);
// api/home/about/products

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About')
});

app.get('/api/product', (req, res) => {
  res.send('Products');
});
// the middleware can also be applied to only one of the route as below
app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user)
  res.send('Items');
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on http://localhost:${app.get("port")}`);
});