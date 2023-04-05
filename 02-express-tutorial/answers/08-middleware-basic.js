"use strict";

const express = require('express'),
  app = express(),
  logger = (req, res, next) => {
    const method = req.method,
      url = req.url,
      time = new Date().getFullYear();
    console.log(method, url, time);
    // it is possible to terminate the cycle by sending a respnse
    // from the middleware function
    // res.send('Testing');
    next();
  };

app.set('port', process.env.PORT || 5000);

// req => middleware => res

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About')
});

app.listen(app.get('port'), () => {
  console.log(`Server listening on http://localhost:${app.get("port")}`);
});