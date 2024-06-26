const path = require('path');

console.log(path.sep);

const filePath = path.join('/01-node-tutorial/', 'answers', '01-intro.js');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, '/01-node-tutorail/', 'answers', '01-intro.js')
console.log(absolute);
