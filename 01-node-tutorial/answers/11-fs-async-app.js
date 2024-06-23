

const { readFile, writeFile} = require('fs')
console.log('start');
readFile('./mycontent/myfirst.txt', 'utf8', (error, result) => {
    if(error){
        console.log(error)
        return
    }
const first = result
readFile('./mycontent/mysecond.txt', 'utf8', (err, result) =>{
    if(err){

    console.log(err)
    return
    }
    const second = result
    writeFile('./mycontent/myresult-async.txt', `Here is the result:  ${first},  ${second}`, (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')

    }
    )
    })
})
console.log('start with new task')