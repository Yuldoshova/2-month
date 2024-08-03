const http = require('http')
const fs = require('node:fs')
const { subtract, add } = require('./functions')

console.log(subtract(23, 54))
console.log(add(34, 5))

const server = http.createServer((req, res) => {

  // file'lar bilan sync va async ishlash
  // console.log('Start reading file')
  // fs.readFile('./data.txt', 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('Fayl o\'qishda xatolik')
  //   }
  //   console.log(data)
  // })
  // console.log('Finish reading file')

  // fs.writeFile('./data.txt', "Yangi ma'lumot", (err) => {
  //   if (err) {
  //     console.log("Fayl yozishda xatolik: " + err)
  //   }
  // })


  //url bilan ishlash
  const urls = req.url.split('/')
  const taskId = +urls[2]
  const method = req.method

  //CORS'ni oldini olish uchun
  res.setHeader('access-control-allow-origin', '*')

  if (method === 'GET' && urls[1] == 'tasks') {

    if (parseInt(urls[2], 10)) {

      res.writeHead(200, { 'Content-type': 'text/html' })
      res.end(`<ul><li style="color:green; font-size:50px">Task ${taskId} </li></ul>`)
      return;
    }

    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(`<ol style="color:blue; font-size:40px">
      <li>Task 1</li>
      <li>Task 4</li>
      <li>Task 3</li>
      </ol>`)
    return;
  }

  if (method === 'DELETE') {
    if (urls[1] == 'tasks' && parseInt(urls[2], 10)) {
      res.writeHead(200, { 'Content-type': "text/html" })
      res.end(`${url[2]}-task o'chitildi`)
      return
    }
  }

  res.writeHead(200, { 'Content-type': "text/html" })
  res.end("<h1 style='color: red'>Assalomu alaykum!</h1>")
})

server.listen(3000, () => {
  console.log("Server 3000-portda ishga tushdi!")
})