// Your code here
window.addEventListener("DOMContentLoaded", (e) => {
  const add = document.getElementById("add");
  const ul = document.getElementById("shopping-list");

  add.addEventListener("click", (e) => {
    e.preventDefault()

    const newLi = document.createElement("li");
    const name = document.getElementById("name");
    const type = document.getElementById('type')

    newLi.innerText = name.value
    newLi.dataset.type = type.value
    // newLi.setAttribute('data-type', type.value)

    ul.appendChild(newLi)

    name.value = ''
    type.value = 'dairy'
  });
});
