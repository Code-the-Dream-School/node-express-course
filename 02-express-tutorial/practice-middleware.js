const consoleLog = (req, res, next) => {
  console.log("any statement");
  next();
}
module.exports = consoleLog