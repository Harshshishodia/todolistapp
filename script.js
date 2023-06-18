// Get necessary elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${taskText}</span>`;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

// Remove task from the list
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
  }
});
