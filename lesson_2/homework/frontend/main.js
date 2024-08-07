const data = await fetch('http://localhost:4000/tasks')
const allTasks = await data.json()

document.body.insertAdjacentHTML("beforeend")
