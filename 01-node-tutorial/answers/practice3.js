fs = require('fs').promises;

writeFile(
    "01-node-tutorial/answers/content/practice2.txt",
    content,
  
    (err) => {
      console.log(err);
    }
  );