const fs = require('node:fs')

const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        console.log('ERROR❗❗❗' + error.message)
    }
}

const writeFile = (filePath, content) => {
    try {
        fs.writeFileSync(filePath, content)
        return "Succesfully writed✅"
    } catch (error) {
        console.log('ERROR❗❗❗' + error.message)
    }
}

module.exports = { readFile, writeFile }