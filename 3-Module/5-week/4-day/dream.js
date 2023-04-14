const body = document.getElementsByTagName("body")[0];

const div = document.getElementById("div");
const span = document.getElementById("span");
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");

window.onload = function() {
    body.addEventListener("click", (e) => {
        console.log("body was clicked")
        console.log("Who got clicked: " + e.target);
        console.log(e.cancelable);
      })
  
      h1.addEventListener("click", (e) => {
        console.log("h1 was clicked")
      })
}