const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject)=> {
        readFile(path, 'utf8', (err, data)=>{
                if(err){
                    reject(err);
                } else {
                    resolve(data);
                }
            })

    })
}

getText('./temporary/first.txt')
.then(result => console.log(result))
.catch( err => console.log(err))


//psth /Users/sarahdapkiewicz/Desktop/NodeExpress/CTD/CTDRepoFork/node-express-course/01-node-tutorial/answers/temporary/first.txt

//This could be  a problem, could use a promise or async or await 
// readFile('./content/first/txt', 'utf8', (err, data)=>{
//     if(err){
//         return;
//     } else {
//         console.log(data);
//     }
// })