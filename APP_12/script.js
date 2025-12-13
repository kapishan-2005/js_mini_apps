const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskCount.textContent = tasks.length;
    }

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
          <span onclick="toggleTask(${index})">${task.text}</span>
          <div class="actions">
            <button onclick="deleteTask(${index})">✖</button>
          </div>
        `;

        taskList.appendChild(li);
      });
      saveTasks();
    }

    function addTask() {
      const text = taskInput.value.trim();
      if (!text) return alert('Please enter a task');

      tasks.push({ text, completed: false });
      taskInput.value = '';
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    taskInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') addTask();
    });

    renderTasks();
