document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskText = document.getElementById('todo-text').value;

    if (taskText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');

        const taskTextNode = document.createElement('span');
        taskTextNode.classList.add('task-text');
        taskTextNode.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(taskTextNode);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        document.getElementById('todo-text').value = '';
    }
});

document.getElementById('todo-text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task-btn').click();
    }
});



