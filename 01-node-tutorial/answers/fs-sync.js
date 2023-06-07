// 6) fs-sync.js

const { readFileSync, writeFileSync } = require('fs');
const firstText = readFileSync('CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/first.txt', 'utf8');
const secondText = readFileSync('CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/second.txt', 'utf8');

writeFileSync(
  'CTD Class (HTML, CSS, JavaScript)/Node/node-express-course/01-node-tutorial/content/result-sync.txt',
  `Here is the result: ${firstText}, ${secondText}\n`,
  { flag: 'a' }
);
