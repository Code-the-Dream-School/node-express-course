const path = require('path')
console.log(path.sep)

const filePath = path.join('Users','giovannihernandez','Desktop','Ferret','node-express-course','01-node-tutorial','answers')
console.log(filePath)

const absolute = path.resolve(__dirname)
console.log(absolute)