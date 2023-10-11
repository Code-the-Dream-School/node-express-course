const { createReadStream } = require('fs')

const stream1 = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 100 })

let counter = 0
stream1.on('data', (result) => {
    counter++
    console.log(`The result is: ${result} and ${result.length}`)
})

stream1.on('end', () => console.log(`Total chunks : ${counter}`))
stream1.on('error', (err) => console.log(err))
