const export_var = require('./practice2')
const os = require('os')
const fs = require('fs').promises;

async function writeToFile() {
    await fs.writeFile('./content/practice.txt', export_var.sentence + '\n' + os.userInfo().username, {
      encoding: 'utf8'
    });
}

writeToFile()
console.log(export_var.sentence)