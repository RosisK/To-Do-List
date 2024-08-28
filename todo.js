// Variables for HTML elements
const inputElement = document.querySelector(".input-bar");
const addTaskButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");

// Function to add task to the list
const addTask = () => {
    // User-Typed Task
    const task = inputElement.value;

    // Create HTML elements for the list
    const listDiv = document.createElement("div");
    listDiv.classList.add("task-list-div");
    const listItem = document.createElement("li");
    listItem.classList.add("task-list-item");
    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-task-button");

    listItem.innerHTML = `${task}`;
    removeTask.innerHTML = "Remove Task";

    // Append the elements to the page
    taskList.appendChild(listDiv);
    listDiv.appendChild(listItem);
    listDiv.appendChild(removeTask);

    // Clear input box after adding a task
    inputElement.value = "";
    
    // Event listener for the "remove task" button
    removeTask.addEventListener("click", () => {
        taskList.removeChild(listDiv);
    });
}

// Event listener to add tasks
addTaskButton.addEventListener("click", addTask);
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});