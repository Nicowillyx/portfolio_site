function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  });

  document.getElementById('taskList').appendChild(li);
  taskInput.value = "";
}