const path = require('path');
console.log(path.sep);

const filePath = path.join('09-path-module.js')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, '09-path-module.js');
console.log(absolute);
