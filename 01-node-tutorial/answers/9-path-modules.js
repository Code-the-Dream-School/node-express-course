console.log('---------------------------------------------------');
const path = require('path')
console.log(path.sep);
console.log('---------------------------------------------------');
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);
console.log('---------------------------------------------------');
const base = path.basename(filePath)
console.log(base);
console.log('---------------------------------------------------');
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
console.log('---------------------------------------------------');