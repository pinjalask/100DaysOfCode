const todoList = [];
// const todoList = [
//   { name: "make dinner", dueDate: "01-12-2024" },
//   { name: "wash dishes", dueDate: "01-12-2024" },
// ];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputEle = document.querySelector(".js-name-input");
  const name = inputEle.value;

  const dateInputEle = document.querySelector(".js-due-date-input");
  const dueDate = dateInputEle.value;

  todoList.push({
    //name: name, dueDate: dueDate
    name,
    dueDate,
  });

  inputEle.value = "";
  dateInputEle.value = "";

  renderTodoList();
}
