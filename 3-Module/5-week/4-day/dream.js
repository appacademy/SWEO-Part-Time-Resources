const body = document.getElementsByTagName("body")[0];

const div = document.getElementById("div");
const span = document.getElementById("span");
const btn = document.getElementById("btn");

window.onload = function() {
  body.addEventListener("click", (event) => {
    console.log("body was clicked")
  })
  

  
  span.addEventListener("click", () => {
    console.log("span was clicked")

  })
  
  btn.addEventListener("click", () => {
    console.log("button was clicked")
  })
}