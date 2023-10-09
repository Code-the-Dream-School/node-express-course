const path = require('path')

// console.log(path.sep)
// console.log(path.join)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
const base = path.basename(filePath)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(filePath)
console.log(base)
console.log(absolute)