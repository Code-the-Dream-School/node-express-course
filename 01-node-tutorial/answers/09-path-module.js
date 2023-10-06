const path = require('path');

const pathSegments = [
    'users',
    'AnnaSolovykh',
    'node-express-course',
    '01-node-tutorial',
    'answers'
];

const joinedPath = path.join(...pathSegments);
console.log(joinedPath);
