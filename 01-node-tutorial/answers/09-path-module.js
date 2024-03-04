const path = require('path')
const os = require('os')

console.log(path.sep)

console.log(path.join('/foo','bar','baz/asdf','quix','...'))
console.log(path.normalize("c://temp////foo//boo"))
let filePath = "";
console.log(os.type())
if (os.type() === 'Windows_NT') {
     filePath = path.join('\01-node-tutorial','answers','01-intro.js')
}
else {
     filePath = path.join('/01-node-tutorial','answers','01-intro.js')
}

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'01-node-tutorial', 'answers','01-intro.js')
console.log(absolute)
//C:\Users\JohnSmith\node-express-course\01-node-tutorial\answers