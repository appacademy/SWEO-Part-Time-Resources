/* DO NOT CHANGE THE JS IN THIS FILE OR YOU MAY FAIL */

window.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById('bubble-maker')
    .parentElement
    .addEventListener('click', (e) => {
      if (e.target.id === 'bubble-maker') {
        const bubbleBox = document.getElementById("bubble-holder");
        bubbleBox.style.backgroundImage = "url(./images/bubbles.png)";
      }
    });
});