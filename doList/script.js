function addTodo() {
    const todoInput = document.getElementById('new-todo');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const newTodoItem = document.createElement('li');
        newTodoItem.className = 'todo-item';
        newTodoItem.innerHTML = `
          <input type="checkbox">
          <span>${todoText}</span>
          <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        `;

        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    }
}

function deleteTodo(btn) {
    const todoItem = btn.parentNode;
    const todoList = document.getElementById('todo-list');
    todoList.removeChild(todoItem);
}