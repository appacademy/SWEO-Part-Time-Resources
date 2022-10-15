window.addEventListener("DOMContentLoaded", (e) => {
  // console.log(document.getElementById("form"))

  const form = document.getElementById("form");
  const input1 = document.getElementById("input");
  const nameInput = document.getElementById("name-input");
  const lastNameInput = document.getElementById("lastName-input");
  const colorInput = document.getElementById("color-input");
  const screenRight = document.querySelector(".screen-right");
  const screenBottom = document.getElementById("screen-bottom-right");
  const greenBtn = document.getElementById("green-button");

  input1.addEventListener("input", (e) => {
    let inputVal = e.target.value;

    screenRight.innerText = inputVal;
  });

  const clearTxtBtn = document.getElementById("button");

  clearTxtBtn.addEventListener("click", (e) => {
    input1.value = "";
    screenRight.innerText = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameVal = nameInput.value;
    let lastNameVal = lastNameInput.value;

    const newNameDiv = document.createElement("div");

    newNameDiv.innerText = `${nameVal} ${lastNameVal}`;
    screenRight.appendChild(newNameDiv);
  });

  greenBtn.addEventListener("click", (e) => {
    screenBottom.style.backgroundColor = e.target.innerText;
  });

  colorInput.addEventListener("input", (e) => {
    screenBottom.style.height = `${e.target.value}px`;
  });
});