document.addEventListener('DOMContentLoaded', (e) => {
  const blue = document.getElementById('outer');

  blue.addEventListener('scroll', (e) => {
    // console.log(e);
    // if we click on the red square
    console.log("BLUE TARGET:", e.target.className, e.target.id); // red
    console.log("BLUR CURRTARGET:", e.currentTarget.className); // blue
  });

  const red = document.getElementById('inner');
  red.addEventListener('click', (e) => {

    // clicking on red no longer does anything
    // e.stopPropagation();
     console.log("RED TARGET:", e.target.className, e.target.id); // red
    console.log("RED CURRTARGET:", e.currentTarget.className); // blue

  });

  const check = document.getElementById('unclickable');
  check.addEventListener('click', (e) => {
    e.preventDefault();
  });

});
