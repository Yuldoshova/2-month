document.addEventListener("DOMContentLoaded", function () {
    fetchTasks();
});

function fetchTasks() {
    fetch("http://localhost:4000/tasks")
        .then((response) => response.json())
        .then((data) => {
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "";

            data.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.textContent = task.title;
                taskList.appendChild(listItem);
            });

        })
        .catch((error) => {
            console.log("Error fetching tasks:", error);
            const taskList = document.getElementById("task-list");
            taskList.innerHTML = "<li>Error fetching tasks</li>";
        });
}


window.fetchTasks = fetchTasks;