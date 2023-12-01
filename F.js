document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    const todos = []; 

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newTodoValue = newTodoInput.value.trim();

        if (newTodoValue !== '') {
            todos.push(newTodoValue); 
            renderTodos(); 
            newTodoInput.value = '';
        }
    });

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.textContent = todo;
            todoList.appendChild(todoItem);
        });
    }
});