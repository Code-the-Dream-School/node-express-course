const {readFile, writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async() => {
    try{
        const first = await readFile('./temporary/first.txt', 'utf8')
        const second = await readFile('./temporary/second.txt', 'utf8')
        await writeFile(
            './temporary/result-mind-grenade.txt', 
            `This is awesome: ${first}, ${second}`, 
            {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
  
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject)=> {
//         readFile(path, 'utf8', (err, data)=>{
//                 if(err){
//                     reject(err);
//                 } else {
//                     resolve(data);
//                 }
//             })

//     })
// }

// getText('./temporary/first.txt')
// .then(result => console.log(result))
// .catch( err => console.log(err))