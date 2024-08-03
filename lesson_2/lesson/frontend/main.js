const res = await fetch('http://localhost:3000/tasks')
const output = await res.text()
console.log(output)
document.body.insertAdjacentHTML("beforeend", output)