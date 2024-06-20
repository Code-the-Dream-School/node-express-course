const path = require('path')
console.log(path.sep)

// get the file path separate by a /
const filePath = path.join('/Content', 'Subfolder', 'text.txt')
console.log(filePath);

// get the base name of the file
const base = path.basename(filePath)
console.log(base)

// get the absolute path of a file
const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'test.txt')
console.log(absolute)