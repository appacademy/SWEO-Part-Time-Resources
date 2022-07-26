window.addEventListener('DOMContentLoaded', (e) => {
  const add = document.getElementById('add');
  const ul = document.getElementById('shopping-list');

  add.addEventListener('click', (e) => {
    e.preventDefault();

    const newItem = document.createElement('li');
    const name = document.getElementById('name');
    const type = document.getElementById('type');

    newItem.innerText = name.value;
    newItem.dataset.type = type.value;
    // newItem.setAttribute('data-type', type.value);
    //! Camel cases automagically
    // newItem.setAttribute('data-type-name', type.value);
    // console.log(newItem.dataset);

    ul.appendChild(newItem);

    name.value = '';
    type.value = 'dairy';
  });
});
