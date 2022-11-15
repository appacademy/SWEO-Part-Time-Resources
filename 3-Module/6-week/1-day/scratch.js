// scratch.js
// const blue = document.getElementById('outer');\

// document.addEventListener('DOMContentLoaded', () => {

const check = document.getElementById("unclickable");

check.addEventListener("click", (event) => {
    console.log('click ')
  event.preventDefault();
});
// })
