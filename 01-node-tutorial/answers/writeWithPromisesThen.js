const fs = require('fs').promises

const writeAndRead =  () => {
    fs.writeFile('./temporary/temp.txt', ' first1 \n second2 \n third3', { flag: 'a' }).then(()=>{
        fs.readFile('./temporary/temp.txt', { encoding: 'utf8' })
    })
}

writeAndRead()