// const fileSystem = require('node:fs')
const fileSystem = require('fs');

const newUser = {
    id: 4,
    name: "Dilnoza",
    age: 22
}

const filePath1 = __dirname + "\\files\\users.json";
const filePath2 = './lesson/files/users.json'

//filedan o'qish
function readFile(filePath) {
    try {
        const data = fileSystem.readFileSync(filePath, 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}

//filega yozish
function writeFile(filePath, content) {
    try {
        fileSystem.writeFileSync(filePath, content)
        return "Successfully writed!✅"
    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}


// const data = JSON.parse(fileSystem.readFileSync('./files/users.json', 'utf-8'))
// data.push(newUser)
// fileSystem.writeFileSync('./files/users.json', JSON.stringify(data, null, 4))

const users = readFile(filePath1)
let content = ""
users.forEach(user => {
    content += `\n${user.id}-foydalanuvchi ${user.name}ning yoshi ${user.age}da`
});
console.log(content)

const result = writeFile('./files/data.txt', content)
console.log(result)