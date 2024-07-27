// const http = require('node:http')
const http = require('http')
const fs = require('fs')

const readFileFn = (filePath) => {
    try {
        return fs.readFileSync(filePath, 'utf-8')
    } catch (error) {
        console.log("ERROR❗❗❗" + error.message)
    }
}

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-type': 'text/html' })
    // res.end('<h1 style="color:red;">Server yoniq!</h1>')

    // const jsonData = readFileFn('./files/users.json')
    // res.writeHead(200, { 'content-type': 'application/json' })
    // res.end(jsonData)

    // const textData = readFileFn('./files/data.txt')
    // res.writeHead(200, { 'Content-type': 'text/plain' })
    // res.end(textData)

    const htmlData = readFileFn('./files/index.html')
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(htmlData)

})

server.listen(3000, 'localhost', () => {
    console.log('Sever 3000-portda ishga tushdi...')
})
