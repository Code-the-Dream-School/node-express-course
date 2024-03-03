const path = require('path')

// console.log(path)

const myfilePath = path.join('component', 'subfile', 'example.js')

console.log(myfilePath)

const base = path.basename(myfilePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'component', 'subfile', 'example.js')
console.log(absolutePath)