import http from "node:http"
import url from 'node:url'
import fn from './utils/fs.js'
import { readFile } from "node:fs";

const PORT = 3000;

const server = http.createServer((req, res) => {
    const method = req.method;
    const path = url.parse(req.url, true).path
    const urls = path.split('/')
    const allTasks = fn.readFileCustom('./data/tasks.json')
    const allUsers = fn.readFileCustom('./data/users.json')

    if (method === "GET") {
        if (urls[1] == 'tasks') {
            if (Number(urls[2])) {
                const taskId = parseInt(urls[2], 10)
                const foundTask = allTasks.find((task) => task.id == taskId)
                if (!foundTask) {
                    res.writeHead(404, { 'Content-type': 'text/html' })
                    res.end(`<h1 style="color:red">${taskId}-task ot found!</h1>`)
                    return;
                }
                res.writeHead(200, { 'Content-type': "application/json" })
                res.end(JSON.stringify(foundTask, null, 4))
                return;
            }
            res.writeHead(200, { 'Content-type': "application/json" })
            res.end(JSON.stringify(allTasks, null, 4))
            return;
        }

        if (urls[1] == 'users') {
            if (Number(urls[2])) {
                const userId = parseInt(urls[2], 10)
                const foundUser = allUsers.find((user) => user.id == userId)
                if (!foundUser) {
                    res.writeHead(404, { 'Content-type': 'text/html' })
                    res.end(`<h1 style="color:red">${userId}-user not found!</h1>`)
                    return;
                }
                res.writeHead(200, { 'Content-type': "application/json" })
                res.end(JSON.stringify(foundUser, null, 4))
                return;
            }

         readFile('./data/users.json', 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-type': 'text/html' })
                    res.end(`<h1 style="color:red">File o'qishda xatolik!</h1>`)
                    return;
                }
                res.writeHead(200, { 'Content-type': 'applications/json' })
                res.end(JSON.stringify({
                    message: "success",
                    data: JSON.parse(data)
                }))
                return;
            })
   
            // res.writeHead(200, { 'Content-type': "application/json" })
            // res.end(JSON.stringify(allUsers, null, 4))
            return;
        }
    }



    res.writeHead(200, { "Content-type": 'text/html' })
    res.end('<h1 style="color:red">Xato so\'rov yuborildi!</h1>')
    return;
})

server.listen(PORT, 'localhost', () => {
    console.log(`Server ${PORT}-portda ishga tushdi...`)
})