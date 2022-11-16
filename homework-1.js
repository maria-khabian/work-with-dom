//создаём HTML элемент createElement

const formHTML = document.createElement('form');
formHTML.className = 'create-user-form';
//console.log(formHTML);

//вставили созданный выше HTML элемент в ДОМ-дерево
const tasksListBlock = document.querySelector('.tasks-list');
tasksListBlock.prepend(formHTML);

const objForInputHTML = [
  {
    textContent: 'Имя',
    type: 'text',
    name: 'userName',
    placeholder: 'Введите ваше имя',
  },
  {
    textContent: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Придумайте Пароль',
  },
];

objForInputHTML.map((obj) => {
  const labelHTML = document.createElement('label');
  labelHTML.textContent = obj.textContent;
  formHTML.prepend(labelHTML);

  const inputHTML = document.createElement('input');
  inputHTML.type = obj.type;
  inputHTML.name = obj.name;
  inputHTML.placeholder = obj.placeholder;
  console.log(labelHTML);

  labelHTML.append(inputHTML);
  const brHTML = document.createElement('br');
  //labelHTML.append(brHTML);
  //console.log(brHTML);
  labelHTML.insertAdjacentElement('afterend', brHTML);
});

const buttonHTML = document.createElement('button');
buttonHTML.type = 'submit';
buttonHTML.textContent = 'Подтвердить';

tasksListBlock.append(buttonHTML);
