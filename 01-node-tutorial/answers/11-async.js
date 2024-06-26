const { writeFile } = require('fs');
console.log("at start");

writeFile('./temporary/fileB.txt', 'This is line 1\n', (err) => {
  if (err) {
    console.error("This error happened: ", err);
  } else {
    console.log("at point 1");
    
    writeFile('./temporary/fileB.txt', 'This is line 2, appended.\n', { flag: 'a' }, (err) => {
      if (err) {
        console.error("This error happened: ", err);
      } else {
        console.log("at point 2");
        
        writeFile('./temporary/fileB.txt', 'This is line 3, also appended.\n', { flag: 'a' }, (err) => {
          if (err) {
            console.error("This error happened: ", err);
          } else {
            console.log("at point 3");
            console.log('File write completed.');
          }
        });
      }
    });
  }
});

console.log('at end');