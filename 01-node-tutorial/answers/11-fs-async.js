const { writeFile, readFile } = require('fs');
const { join } = require('path');

const filePath = join(__dirname, 'temporary', 'fileB.txt');
const line1 = 'This is my first line';
const line2 = 'This is my second line';
const line3 = 'This is my third line';

console.log('start');
console.log('writing...');
writeFile(filePath, `${line1}\n`, (err, result) => {
  console.log('adding the first line');
  if (err) {
    console.log('This error happened: ', err);
  } else {
    writeFile(filePath, `${line2}\n`, { flag: 'a' }, (err, result) => {
      console.log('adding the second line');
      if (err) {
        console.log('This error happened: ', err);
      } else {
        writeFile(filePath, line3, { flag: 'a' }, (err, result) => {
          console.log('adding the third line');
          if (err) {
            console.log('This error happened: ', err);
          } else {
            console.log('reading...');
            readFile(filePath, 'utf8', (err, result) => {
              if (err) {
                console.log('This error happened: ', err);
              } else {
                console.log('printing file:');
                console.log(result);
                console.log('end');
              }
            });
          }
        });
      }
    });
  }
});
