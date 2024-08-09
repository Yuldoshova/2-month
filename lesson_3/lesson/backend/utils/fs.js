import fs from "node:fs"

const readFileCustom = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.log(error.message)
    }
}

const writeFileCustom = (filePath, content) => {
    try {
        fs.writeFileSync(filePath, content)
        return "Successfully writed!"
    } catch (error) {
        console.log(error.message)
    }
}

export default { readFileCustom, writeFileCustom }