const { writeFileSync } = require('node:fs');
const { readFile, writeFile } = require('./functions.js');
const http = require('node:http');
const url = require('node:url');
const { title } = require('node:process');

const server = http.createServer((req, res) => {

    res.setHeader('access-control-allow-origin', '*')

    const method = req.method;
    const urlPath = url.parse(req.url)
    const urls = urlPath.pathname?.split('/')
    const taskId = parseInt(urls[2])
    const tasks = readFile('./tasks.json')

    if (method === "GET" && urls[1] == 'tasks') {
        if (taskId) {
            const foundTask = tasks.find((task) => task.id == taskId)
            if (!foundTask) {
                res.writeHead(404, { 'Content-type': 'text/plain' })
                res.end(`${taskId}-task not found!`);
                return;
            }
            res.writeHead(200, { 'Content-type': "application/json" })
            res.end(JSON.stringify(foundTask, null, 4))
            return;
        }
        res.writeHead(200, { 'Content-type': "application/json" })
        res.end(JSON.stringify(tasks, null, 4))
        return;
    }

    if (method === "DELETE" && urls[1] == 'tasks' && taskId) {
        const foundTask = tasks.find((task) => task.id == taskId)
        if (!foundTask) {
            res.writeHead(404, { 'Content-type': 'text/plain' })
            res.end(`${taskId}-task not found!`);
            return;
        }
        tasks.splice(foundTask.id - 1, 1)
        writeFile('./tasks.json', JSON.stringify(tasks, null, 4))
        res.writeHead(200, { 'Content-type': 'text/plain' })
        res.end(`${taskId}-task successfully deleted!`)
        return;
    }

    if (method === "POST" && urls[1] == 'tasks') {
        let newTask = '';

        req.on('data', (chunk) => {
            newTask += chunk.toString()
        })

        req.on('end', () => {
            const createdTask = JSON.parse(newTask);
            tasks.push({
                id: tasks.at(-1).id + 1,
                ...createdTask
            })
            writeFileSync('./tasks.json', JSON.stringify(tasks, null, 4));
        })

        res.writeHead(201, { 'Content-type': 'application/json' })
        res.end("Successfully created!")
        return;
    }

    if (method === "PUT" && urls[1] == 'tasks' && taskId) {
        let newTask = ''
        let foundTask = tasks.find((task) => task.id == taskId)
        if (!foundTask) {
            res.writeHead(404, { 'Content-type': 'text/plain' })
            res.end(`${taskId}-task not found!`);
            return;
        }

        req.on('data', (chunk) => {
            newTask += chunk.toString()
        })
        req.on('end', () => {
            const update = JSON.parse(newTask)
            foundTask = {
                title: update.title,
                isDone: update.isDone
            }
            tasks.splice(foundTask.id, 1, foundTask)
            writeFileSync('./tasks.json', JSON.stringify(tasks, null, 4));
        })
        res.writeHead(201, { 'Content-type': 'application/json' })
        res.end("Successfully updated!")
        return;
    }

    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Hello world!')
    return;
})

server.listen(4000, 'localhost', () => {
    console.log('Server 4000-portda ishga tushdi...')
})