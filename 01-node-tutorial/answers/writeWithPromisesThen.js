const { writeFile, readFile } = require('fs').promises;

writeFile('../content/hometask2.txt', 'Line1\n')
    .then(()=> {
        return writeFile('../content/hometask2.txt', 'Line2\n', { flag: 'a' });
    })
    .then(()=> {
        return writeFile('../content/hometask2.txt', 'Line3\n', { flag: 'a' }); 
    })
    .then(()=> {
        return readFile('../content/hometask2.txt', 'utf-8')
    })
    .then((data)=> {
        console.log(data)
    })
    .catch((error)=> {
        console.log(error);
    })