const tasksHTML = document.querySelector('#tasks');

// const formHTML = document.createElement('form');
// formHTML.className = 'create-user-form';
// tasksHTML.append(formHTML);

const formHTML = document.createElement('div');
tasksHTML.append(formHTML);
formHTML.innerHTML =
  '<form class="create-user-form"><label>Имя<input type="text" name="userName" placeholder="Введите ваше имя"></label><label>Пароль<input type="password" name="password" placeholder="ПридумайтеПароль"></label><button type="submit">Подтвердить</button></form>';
