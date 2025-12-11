
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center todo-item";

    li.innerHTML = `
      <span>${taskText}</span>
      <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  });

  // Event Delegation (click to complete or delete)
  taskList.addEventListener("click", (e) => {
    // delete
    if (e.target.classList.contains("deleteBtn")) {
      e.target.closest("li").remove();
      return;
    }

    // mark complete
    if (e.target.closest("li")) {
      e.target.closest("li").classList.toggle("completed");
    }
  });
