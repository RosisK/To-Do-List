const inputElement = document.querySelector(".input-bar");
const addTaskButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");


const addTask = () => {
    const task = inputElement.value;

    const listDiv = document.createElement("div");
    listDiv.classList.add("task-list-div");
    const listItem = document.createElement("li");
    listItem.classList.add("task-list-item");
    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-task-button");

    listItem.innerHTML = `${task}`;
    removeTask.innerHTML = "Remove Task";

    taskList.appendChild(listDiv);
    listDiv.appendChild(listItem);
    listDiv.appendChild(removeTask);

    inputElement.value = "";
    
    removeTask.addEventListener("click", () => {
        taskList.removeChild(listDiv);
    });
}

addTaskButton.addEventListener("click", addTask);
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});