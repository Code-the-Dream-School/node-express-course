const consoleLog = (req, res, next) => {
  console.log("I understand how middleware function works");
  next();
};

module.exports = consoleLog;
