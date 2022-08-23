// script.js
// you need to wait for the stylesheet to load
window.onload = () => {
    // store the elements you need in variables
    const checkbox = document.getElementById("on-off");
    const divShowHide = document.getElementById("now-you-see-me");
    // add an event listener for the checkbox click
    checkbox.addEventListener("click", event => {
      // use the 'checked' attribute of checkbox inputs
      // returns true if checked, false if unchecked
      if (checkbox.checked) {
        // if the box is checked, show the div
        divShowHide.classList.remove("hide");
        divShowHide.classList.add("show");
        // else hide the div
      } else {
        divShowHide.classList.remove("show");
        divShowHide.classList.add("hide");
      }
    });
  };