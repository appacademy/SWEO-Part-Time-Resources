document.addEventListener('DOMContentLoaded', (e) => {
  const blue = document.getElementById('outer');

  blue.addEventListener('click', (e) => {
    // console.log(e);
    // if we click on the red square
    console.log(e.target.className, e.target.id); // red
    console.log(e.currentTarget.className); // blue
  });

  const red = document.getElementById('inner');
  red.addEventListener('click', (e) => {
    // clicking on red no longer does anything
    e.stopPropagation();
  });

  const check = document.getElementById('unclickable');
  check.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
