const { writeFile } = require('fs');

console.log("at start");

writeFile('./temporary/fileB.txt', 'Line 1\n', (err) => {
  if (err) return console.log(err);
  console.log('at point 1');

  writeFile('./temporary/fileB.txt', 'Line 2\n', { flag: 'a' }, (err) => {
    if (err) return console.log(err);
    console.log('at point 2');

    writeFile('./temporary/fileB.txt', 'Line 3\n', { flag: 'a' }, (err) => {
      if (err) return console.log(err);
      console.log('at point 3');
    });
  });
});

console.log("at end");
