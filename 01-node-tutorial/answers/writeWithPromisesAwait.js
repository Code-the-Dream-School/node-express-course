const fs = require('fs').promises

const writer = async () => {
    try {
        const result = await fs.writeFile('./temporary/temp.txt', ' first \n second \n third', { flag: 'a' })
    }
    catch (err) {
        console.log(err)
    }

}

const reader = async () =>{
    try{
        const result = await fs.readFile('./temporary/temp.txt', { encoding: 'utf8' })
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}

const readWrite = async () =>{
    try{
        await writer()
        await reader()
    }
    catch (err) {
        console.log(err)
    }
}

readWrite()