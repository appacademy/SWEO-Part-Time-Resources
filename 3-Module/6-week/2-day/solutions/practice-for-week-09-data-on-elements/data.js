window.addEventListener("DOMContentLoaded", (e) => {
  const addBtn = document.getElementById("add");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const shoppingList = document.getElementById("shopping-list");
    const name = document.getElementById("name");
    const type = document.getElementById("type");

    const newItem = document.createElement("li");

    newItem.innerText = name.value;
    // newItem.setAttribute("data-type", type.value);
    newItem.dataset.type = type.value;

    shoppingList.appendChild(newItem);

    name.value = "";
    type.value = "dairy";
  });
});