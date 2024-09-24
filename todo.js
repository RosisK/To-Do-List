const addTaskButton = document.querySelector('.add-task-btn');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            todoList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        li.onclick = function () {
            li.classList.toggle('completed');
        };

        todoList.appendChild(li);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})