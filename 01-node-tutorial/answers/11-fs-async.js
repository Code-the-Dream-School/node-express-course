// asyncronous method work we need to provide a call back
const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./Content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error)
        return
    }
    //console.log(result)
    const first = result;
    readFile('./Content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error)
            return
        }
        // create new file named: resutl-async.txt
    const second = result;
    writeFile(
        './Content/result-async.txt',
        `Here is the result-async : ${first}, ${second}`, 
        (error, result) => {
            if (error) {
                console.log(error)
                return
            }
            //console.log(result);

            console.log('done with this task')
        })

    })
    console.log('starting next task')
})