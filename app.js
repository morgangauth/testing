const STORAGE_KEY = "todo-dashboard-items";

/** @type {Array<{id: string, title: string, completed: boolean}>} */
let todos = loadTodos();

/** @type {"all" | "active" | "completed"} */
let filter = "all";

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const template = document.querySelector("#todo-item-template");
const filterSelect = document.querySelector("#filter-select");
const clearCompletedButton = document.querySelector("#clear-completed-btn");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const remainingCount = document.querySelector("#remaining-count");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = todoInput.value.trim();
  if (!title) {
    return;
  }

  todos.unshift({
    id: crypto.randomUUID(),
    title,
    completed: false,
  });

  todoInput.value = "";
  saveTodos();
  render();
});

filterSelect.addEventListener("change", (event) => {
  filter = event.target.value;
  render();
});

clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  render();
});

render();

function render() {
  renderStats();
  renderList();
  clearCompletedButton.disabled = !todos.some((todo) => todo.completed);
}

function renderStats() {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  totalCount.textContent = total.toString();
  completedCount.textContent = completed.toString();
  remainingCount.textContent = remaining.toString();
}

function renderList() {
  todoList.innerHTML = "";

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  if (visibleTodos.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "empty-state";
    emptyState.textContent =
      todos.length === 0
        ? "No tasks yet. Add one above to get started."
        : "No tasks match this filter.";
    todoList.appendChild(emptyState);
    return;
  }

  for (const todo of visibleTodos) {
    const fragment = template.content.cloneNode(true);
    const item = fragment.querySelector(".todo-item");
    const checkbox = fragment.querySelector(".todo-item__checkbox");
    const title = fragment.querySelector(".todo-item__title");
    const deleteButton = fragment.querySelector(".todo-item__delete");

    checkbox.checked = todo.completed;
    title.textContent = todo.title;
    item.classList.toggle("is-completed", todo.completed);

    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
    });

    deleteButton.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    todoList.appendChild(fragment);
  }
}

function toggleTodo(todoId) {
  todos = todos.map((todo) => {
    if (todo.id !== todoId) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed,
    };
  });

  saveTodos();
  render();
}

function removeTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
  render();
}

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isTodoShape);
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function isTodoShape(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.completed === "boolean"
  );
}
