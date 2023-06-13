const {createReadStream} = require('fs')

const stream = createReadStream("../content/big.txt", {highWaterMark: 200,encoding:"utf8"})
let counter = 0

stream.on('data', (result) => {
    console.log(result)
    counter++
})
stream.on('end', () => {
    console.log(`Chunks: ${counter}`)
})

stream.on('error', (err) => {
    console.log(err)
})