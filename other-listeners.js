const button = document.querySelector('.create-task-block__button');
// button.innerText = '<b>create</b>';
//console.log(button.innerText);

//contextmenu

document.addEventListener('contextmenu', (event) => {
  //console.log(event);
  //   event.preventDefault();
});

//change -- input
const isValidInpute = (value) => {
  if (!value || value.includes('@')) {
    return false;
  }
  return true;
};

const createTaskBlock = document.querySelector('.create-task-block');
const createInputElement = createTaskBlock.querySelector('.create-task-block__input');

document.addEventListener('input', (event) => {
  //   console.log(event);
  const { target } = event;
  const { value } = target;
  //console.log(value);
  const valueInput = isValidInpute(value);
  const messageBlockFormDom = document.querySelector('.error-message-block');

  if (!valueInput) {
    if (!messageBlockFormDom) {
      const newMessageBlock = document.createElement('div');
      newMessageBlock.className = 'error-message-block';
      newMessageBlock.textContent = `Ошибка! Текст не должен быть пустым и не должен содержать символ '@'`;
      createTaskBlock.append(newMessageBlock);
    }
  } else if (valueInput && messageBlockFormDom) {
    messageBlockFormDom.remove();
  }
});
