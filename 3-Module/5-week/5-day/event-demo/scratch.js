document.addEventListener('DOMContentLoaded', (e) => {
  //! /************************* First Input *************************/

  let inputOne = document.getElementById('input');
  // inputOne.addEventListener('change', (e) => {
  inputOne.addEventListener('input', (e) => {
    let words = e.target.value;

    let screenRight = document.querySelector('.screen-right');
    screenRight.innerText = words;
  });

  //! /************************* Clear Text Button *************************/

  let clearTextButton = document.getElementById('button');
  clearTextButton.addEventListener('click', (e) => {
    let screenRight = document.querySelector('.screen-right');
    let inputOne = document.getElementById('input');

    screenRight.innerText = '';
    inputOne.value = '';
  });

  //! /************************* Name Form *************************/

  let form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstNameInput = document.getElementById('name-input').value;
    let lastNameInput = document.getElementById('lastName-input').value;
    let screenRight = document.querySelector('.screen-right');
    let newDiv = document.createElement('div');

    newDiv.innerText = firstNameInput + ' ' + lastNameInput;
    screenRight.appendChild(newDiv);
  });

  //! /************************* Color Buttons *************************/

  let greenButton = document.getElementById('green-button');
  // greenButton.addEventListener('mouseover', (e) => {
  greenButton.addEventListener('click', (e) => {
    let bottomRight = document.getElementById('screen-bottom-right');
    bottomRight.style.backgroundColor = e.target.innerText;
  });

  let redButton = document.getElementById('red-button');
  // redButton.addEventListener('mouseover', (e) => {
  redButton.addEventListener('click', (e) => {
    let bottomRight = document.getElementById('screen-bottom-right');
    bottomRight.style.backgroundColor = e.target.innerText;
  });

  let blueButton = document.getElementById('blue-button');
  // blueButton.addEventListener('mouseover', (e) => {
  blueButton.addEventListener('click', (e) => {
    let bottomRight = document.getElementById('screen-bottom-right');
    bottomRight.style.backgroundColor = e.target.innerText;
  });

  //! /************************* Box Size Slider *************************/

  let colorInput = document.getElementById('color-input');
  colorInput.addEventListener('input', (e) => {
    let bottomRight = document.getElementById('screen-bottom-right');
    bottomRight.style.height = e.target.value + 'px';
  });
});
