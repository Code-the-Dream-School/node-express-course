const { writeFile, readFile } = require('fs'); 
console.log("at start");   
writeFile('./temporary/fileB.txt', 
    // add line 1
    'This is line 1\n', (err, result) => {     
        console.log("at point 1");
        if (err) {           
            console.log("This error happened: ", err);
            return
        } 
        // add line 2   
        writeFile('./temporary/fileB.txt', 
        'This is line 2\n', { flag: 'a' }, (err, result) => {     
            console.log("at point 2");
            if(err) {           
                console.log("This error happened: ", err); 
                return    
            } 
            // add line 3      
            writeFile('./temporary/fileB.txt', 
            'This is line 3\n', { flag: 'a' }, (err, result) => {     
                console.log("at point 3");
                if(err) {           
                    console.log("This error happened: ", err);   
                } 
                // read the file and log the result out
                readFile('./temporary/fileB.txt', 'utf-8', (err, result) => {
                    console.log('at point 4');
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log(result);
                    }
                })
            }) 
        }
    )}
)  
console.log('at end'); 
