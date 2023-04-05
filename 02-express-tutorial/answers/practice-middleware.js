'use strict';

const consoleLog = (req, res, next) => {
  console.log(`Logging to the console...`);
  next();
};

module.exports = consoleLog;