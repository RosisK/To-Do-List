function addTask() {
    const taskInput = document.getElementById('taskInput');
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

