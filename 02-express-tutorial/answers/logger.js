"use strict";

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // it is possible to terminate the cycle by sending a respnse
  // from the middleware function
  // res.send('Testing');
  next();
};

module.exports = logger;