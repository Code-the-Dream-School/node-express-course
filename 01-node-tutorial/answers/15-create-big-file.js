const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i += 1) {
  writeFileSync('./content/big.txt',  `I am number ${i + 1}\n`, { flag: 'a' });
}