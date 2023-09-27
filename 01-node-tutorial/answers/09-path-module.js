const path = require("path")

//var1
const filePath = path.join(__dirname, "/09-path-module.js")
console.log(filePath)

//var2
const absolute = path.resolve(__dirname, "09-path-module.js")
console.log(absolute)