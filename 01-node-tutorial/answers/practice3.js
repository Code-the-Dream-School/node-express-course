const fs = require('fs').promises

 const makeFile = async () => {
   try {
       fs.writeFile('./content/practice2.txt', 'This is the first line \n',)
     for (let i = 2; i <= 10; i++){
      await fs.writeFile('./content/practice2.txt', `This is line ${[i]} \n`, {flag: 'a'}, (err, result) => {
        if(err) {
          console.log(err)
          return result;
        }
      })
    }
        
   } catch (error) {
     console.log(error);
   }
 };
 
 makeFile();


