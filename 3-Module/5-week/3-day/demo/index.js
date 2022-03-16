const ul = document.getElementById('todos');
const inputField = document.getElementById('text-input');
const clickMeBtn = document.getElementById('click-me');

inputField.addEventListener('keyup', () => {
  const inputData = inputField.value;

  if(inputData !== ''){
    clickMeBtn.disabled = false;
  } else {
    clickMeBtn.disabled = true;
  }
})


clickMeBtn.addEventListener('click', () => {
  const inputData = inputField.value;

  const newTodo = document.createElement('li');
  newTodo.innerText = inputData;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "delete";
  deleteBtn.setAttribute('class', 'deleteBtn');
  deleteBtn.style.backgroundColor = 'blue'

  newTodo.appendChild(deleteBtn);

  ul.appendChild(newTodo);

  inputField.value = '';
  clickMeBtn.disabled = true;

  const deleteBtns = document.querySelectorAll('.deleteBtn');

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      let li = btn.parentNode;
      li.remove();
    })
  })
})
