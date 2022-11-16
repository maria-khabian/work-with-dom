const button = document.querySelector('button');
//console.log(button);

const tasksWrapper = document.querySelector('.tasks__wrapper');
//console.log(tasksWrapper.className);
const taskBlock = document.querySelector('.create-task-block');
//console.log(taskBlock);
addEventListener('submit', (event) => {
  //console.log(event);
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  //console.log(taskNameInput);
  if (taskNameInput.value) {
    alert(`Вы ввели задачу ${taskNameInput.value}`);
  } else {
    alert('Введите задачу!');
  }
});
