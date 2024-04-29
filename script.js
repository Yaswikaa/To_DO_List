// Get current date and update HTML
var currentDateElement = document.getElementById("currentDate");
var currentDate = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.className = "list-group-item";
        taskList.appendChild(newTask);
        taskInput.value = "";
        addDeleteIcon(newTask);
    } else {
        alert("Please enter a task!");
    }
}

function addDeleteIcon(taskItem) {
    var deleteIcon = document.createElement("span");
    deleteIcon.className = "delete-icon ml-2";
    deleteIcon.innerHTML = "&#10060;";
    deleteIcon.onclick = function() {
        taskItem.remove();
    };
    taskItem.appendChild(deleteIcon);
}

function toggleTask(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
}
