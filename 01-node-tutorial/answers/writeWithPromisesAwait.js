const { writeFile, readFile } = require("fs").promises 

const writer = async () => {
    try {
        await writeFile('../content/temp.txt', 'Hello! Hope you had a great day!\nThanks for checking my assignment\nEnjoy the rest of your day!😜')
    } catch (err) {
        console.log("There is an error: " + err)
    }
}

// writer()

const reader = async () => {
    try {
        const content = await readFile('../content/temp.txt', 'utf-8')
        console.log("Here is the content from the file: " + content)
    } catch (err) {
        console.log("There is an error while reading the file: " + err)
    }
}

// reader()

const readWrite = async () => {
    try {
        await reader()
        await writer()
    } catch (err) {
        console.log(err)
    }
}

readWrite()