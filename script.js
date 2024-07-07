let todoList =  JSON.parse(localStorage.getItem("todos")) || [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText !== "") {
    todoList.push({ text: todoText, completed: false });
    input.value = "";
    saveTodos();
    displayTodos();
  }
}

function displayTodos() {
  const todoListElement = document.getElementById("todoList");
  todoListElement.innerHTML = "";

  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = ` <span onclick="toggleComplete(${index})">${todo.text}</span>
                     <span onclick="removeTodo(${index})">❌</span> `;
    todoListElement.appendChild(li);
  }
);
}

function removeTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
function toggleComplete(index) {
  todoList[index].completed = !todoList[index].completed;
  saveTodos();
  displayTodos();
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }

// Initial display
displayTodos();
