/* middleware function logging a statement */
const consoleLog = function (req, res, next) {
    console.log('The console log function has been called')
    next();
}
module.exports = consoleLog;