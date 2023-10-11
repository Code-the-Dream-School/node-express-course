const { writeFile, readFile } = require('fs').promises

const writer = async () => {
    try {
        await writeFile('../content/asyncAwait.txt', 'Hello \n World \n Welcome!')
    } catch (error) {
        console.log(`This is the error: ${error}`)
        return
    }
}

const reader = async () => {
    try {
        const readMyNewFile = await readFile('../content/asyncAwait.txt', 'utf8')
        console.log(readMyNewFile)
    } catch (error) {
        console.log(`This is the error: ${error}`)
        return
    }
}

const readeWrite = async () => {
    try {
        await reader()
        await writer()
    } catch (error) {
        console.log(`This is the error: ${error}`)
        return
    }
}
readeWrite()

