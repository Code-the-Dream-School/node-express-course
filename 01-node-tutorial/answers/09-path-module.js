const path = require('path');

console.log('Separator:', path.sep);

const filePath = path.join(__dirname, 'temporary', '.keep');
console.log(filePath);
