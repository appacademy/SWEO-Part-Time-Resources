document.addEventListener('DOMContentLoaded', (e) => {
  const blue = document.getElementById('outer');

  blue.addEventListener('click', (e) => {
    // if we click on the red square
    console.log(e.target.className); // red
    console.log(e.currentTarget.className); // blue
  });

  const red = document.getElementById('inner');
  red.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('hello');
    // clicking on red no longer does anything
  });

  const check = document.getElementById('unclickable');
  check.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
