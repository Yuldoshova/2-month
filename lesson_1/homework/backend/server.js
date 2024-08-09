const http = require('http')
const fileSystem = require('node:fs')

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin','*')

    const urls = req.url.split('/')
    const taskId = urls[2]
    const tasks = fileSystem.readFileSync('./files/tasks.json')

    if (req.method === 'GET' && req.url == '/tasks') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(tasks)
        return;
    }

    if (req.method === 'GET' && taskId) {
        const foundTask = JSON.parse(tasks).find(task => task.id == taskId)

        if (foundTask) {
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(JSON.stringify(foundTask, null, 4))
            return;
        } else {
            res.writeHead(404, { 'Content-type': 'text/plain' })
            res.end("Not found task!")
            return;
        }

    }

    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Hello world!')
})

server.listen(4000, 'localhost', () => {
    console.log('Server 4000-portda ishga tushdi...')
})