const inputElement = document.querySelector(".input-bar");
const addTaskButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");


const addTask = () => {
    const task = inputElement.value;

    const listItem = document.createElement("li");
    const removeTask = document.createElement("button");

    listItem.innerHTML = `${task}`;
    removeTask.innerHTML = "Remove Task";

    taskList.appendChild(listItem);
    taskList.appendChild(removeTask);
    
    removeTask.addEventListener("click", () => {
        taskList.removeChild(listItem);
        taskList.removeChild(removeTask);
    });
}

addTaskButton.addEventListener("click", addTask);
