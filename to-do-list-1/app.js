// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add event listener to the Add Task button
addTaskBtn.addEventListener("click", function() {
	// Create a new li element and span element
	const newTask = document.createElement("li");
	const taskText = document.createElement("span");
	taskText.innerText = taskInput.value;

	// Create a checkbox and delete button for each task
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.addEventListener("click", function() {
		if (this.checked) {
			taskText.style.textDecoration = "line-through";
		} else {
			taskText.style.textDecoration = "none";
		}
	});

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	deleteBtn.addEventListener("click", function() {
		this.parentElement.remove();
	});

	// Append the checkbox, task text, and delete button to the new task li element
	newTask.appendChild(checkBox);
	newTask.appendChild(taskText);
	newTask.appendChild(deleteBtn);

	// Append the new task li element to the task list ul element
	taskList.appendChild(newTask);

	// Clear the input field
	taskInput.value = "";
});
