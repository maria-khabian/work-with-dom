//2

const tasksListHTML = document.querySelector('.tasks-list');

const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

const createTask = (obj) => {
  //--------------tasksItem--------------
  const tasksItem = document.createElement('div');
  tasksItem.className = 'task-item';
  tasksItem.dataset.tasksId = obj.id;
  tasksListHTML.append(tasksItem);

  //--------------tasksItemContainer--------------
  const tasksItemContainer = document.createElement('div');
  tasksItemContainer.className = 'task-item__main-container';
  tasksItem.append(tasksItemContainer);

  //--------------tasksItemContent--------------
  const tasksItemContent = document.createElement('div');
  tasksItemContent.className = 'task-item__main-content';
  tasksItemContainer.append(tasksItemContent);

  //--------------checkboxForm--------------
  const checkboxForm = document.createElement('form');
  checkboxForm.className = 'checkbox-form';
  tasksItemContent.append(checkboxForm);

  //--------------inputCheckboxForm--------------
  const inputCheckboxForm = document.createElement('input');
  inputCheckboxForm.className = 'checkbox-form__checkbox';
  inputCheckboxForm.type = 'checkbox';
  inputCheckboxForm.id = obj.id;
  //console.log(inputCheckboxForm);
  checkboxForm.append(inputCheckboxForm);

  //--------------labelCheckbox--------------
  const labelCheckbox = document.createElement('label');
  labelCheckbox.htmlFor = obj.id;
  checkboxForm.append(labelCheckbox);

  //--------------taskItemText--------------
  const taskItemText = document.createElement('span');
  taskItemText.className = 'task-item__text';
  taskItemText.textContent = obj.text;
  checkboxForm.insertAdjacentElement('afterend', taskItemText);

  //--------------buttonDeleteTaskItem--------------
  const buttonDeleteTaskItem = document.createElement('button');
  buttonDeleteTaskItem.className = 'task-item__delete-button default-button delete-button';
  buttonDeleteTaskItem.dataset.deleteTaskId = obj.id;
  buttonDeleteTaskItem.textContent = 'Удалить';
  //console.log(buttonDeleteTaskItem);
  tasksItemContent.insertAdjacentElement('afterend', buttonDeleteTaskItem);
};

const deleteTask = (id) => {
  const taskForDelete = document.querySelector(`[data-tasks-id='${id}']`);
  taskForDelete.remove();
};

tasks.forEach((obj) => {
  createTask(obj);
});

const isValidInput = (value) => {
  value = value.trim();
  // console.log(value);
  const valueValid = tasks.some((el) => value == el.text);

  if (!value || valueValid) {
    return false;
  }
  return true;
};

const createTaskBlockHTML = document.querySelector('.create-task-block');
const inputElementHTML = createTaskBlockHTML.querySelector('.create-task-block__input');

document.addEventListener('input', (event) => {
  const { target } = event;
  const { value } = target;
  const validValue = isValidInput(value);
  const errorMessageBlockFromDOM = document.querySelector('.error-message-block');
  if (!validValue) {
    if (!errorMessageBlockFromDOM) {
      const divMessageError = document.createElement('div');
      divMessageError.className = 'error-message-block';
      divMessageError.textContent = '';
      createTaskBlockHTML.append(divMessageError);
      if (value == '') {
        divMessageError.textContent = 'Название задачи не должно быть пустым!';
      } else {
        divMessageError.textContent = 'Задача с таким названием уже существует.';
      }
    }
  } else if (validValue && errorMessageBlockFromDOM) {
    errorMessageBlockFromDOM.remove();
  }
});

createTaskBlockHTML.addEventListener('submit', (event) => {
  const { target } = event;
  //console.log(target);
  event.preventDefault();
  const inputValue = target.taskName;
  const textInput = inputValue.value;
  //console.log(textInput);
  if (textInput) {
    // alert('Зашла');
    tasks.push({
      id: String(Date.now()),
      completed: false,
      text: textInput,
    });
    createTask(tasks[tasks.length - 1]);
    // console.log(tasks[tasks.length - 1]);
  } else {
    alert('Введите задачу!');
  }
  document.querySelector('.create-task-block__input').value = '';
});

const bodyHTML = document.querySelector('body');

const modalBlock = document.createElement('div');
modalBlock.className = 'modal-overlay modal-overlay_hidden';
bodyHTML.prepend(modalBlock);

const deleteModalBlock = document.createElement('div');
deleteModalBlock.className = 'delete-modal';
modalBlock.prepend(deleteModalBlock);

const modalTitle = document.createElement('h3');
modalTitle.textContent = 'Вы действительно хотите удалить эту задачу?';
modalTitle.className = 'delete-modal__question';
deleteModalBlock.prepend(modalTitle);

const modalButtonsBlock = document.createElement('div');
modalButtonsBlock.className = 'delete-modal__buttons';
deleteModalBlock.append(modalButtonsBlock);

const buttonCansel = document.createElement('button');
buttonCansel.className = 'delete-modal__button delete-modal__cancel-button';
buttonCansel.textContent = 'Отмена';
modalButtonsBlock.prepend(buttonCansel);

const buttonDelete = document.createElement('button');
buttonCansel.className = 'delete-modal__button delete-modal__confirm-button';
buttonDelete.textContent = 'Удалить';
modalButtonsBlock.append(buttonDelete);

// const all = document.querySelectorAll('*');
// all.forEach((elem) => {
//   elem.addEventListener(
//     'click',
//     () => {
//       console.log(elem.tagName);
//     },
//     true,
//   );
// });

const taskList = document.querySelector('.tasks-list');

taskList.addEventListener('click', (event) => {
  const isButtonDelete = event.target.closest('.task-item__delete-button');
  if (isButtonDelete) {
    modalBlock.classList.remove('modal-overlay_hidden');
    // modalBlock.className = modalBlock.className.slice(
    //   0,
    //   modalBlock.className.indexOf(' modal-overlay_hidden'),
    // );
    buttonDelete.dataset.id = isButtonDelete.dataset.deleteTaskId;
    // console.log(isButtonDelete.dataset.deleteTaskId);
  }
});

buttonCansel.addEventListener('click', () => {
  // modalBlock.className += ' modal-overlay_hidden';
  modalBlock.classList.add('modal-overlay_hidden');
});

buttonDelete.addEventListener('click', () => {
  const newTasks = tasks.forEach((elem) => {
    if (elem.id == buttonDelete.dataset.id) {
      // console.log(tasks.splice(index, 1));
      deleteTask(elem.id);
    }
  });
  modalBlock.classList.add('modal-overlay_hidden');
  // modalBlock.className += ' modal-overlay_hidden';
  // console.log(buttonDelete.dataset.id);
});

const tasksItemAll = document.querySelectorAll('.task-item');
const buttonAll = document.querySelectorAll('button');
console.log(bodyHTML.style.background);
document.addEventListener('keydown', (event) => {
  // console.log(event.code);
  if (event.code == 'Tab' && bodyHTML.style.background == '') {
    event.preventDefault();
    bodyHTML.style.background = '#24292E';
    tasksItemAll.forEach((elem) => (elem.style.color = '#ffffff'));
    buttonAll.forEach((elem) => (elem.style.border = '1px solid #ffffff'));
  } else if (event.code == 'Tab') {
    event.preventDefault();
    bodyHTML.style.background = '';
    tasksItemAll.forEach((elem) => (elem.style.color = 'initial'));
    buttonAll.forEach((elem) => (elem.style.border = 'none'));
  }
});

// const buttonContextMenu = document.querySelector('.create-task-block__button');
// buttonContextMenu.oncontextmenu = (event) => {
//   event.preventDefault();
//   alert('our menu');
// };
