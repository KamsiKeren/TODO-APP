
let tasks = [];

function renderTasks() {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index)=> {
        const taskElement = document.createElement('div');
        taskElement.classList.add("add-item");

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskElement.appendChild(taskText);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = ()=> editTask(index);
        taskElement.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index);
        taskElement.appendChild(removeButton);

        tasksContainer.appendChild(taskElement);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt('Enter the new task text:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

// Initial render
renderTasks();
