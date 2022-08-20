// Robert
// I did this: 
const circle4 = document.getElementById("problem-four");
const square5 = circle4.nextElementSibling;

square5.classList.add("minus");

const minusSquares = document.getElementsByClassName("minus");
[...minusSquares].forEach((square) => square.remove());


// Christopher
const squareHolder = document.getElementById("root");
for (let i = 6; i > 3; i--) {
  squareHolder.children[i].remove()

}


//Chris
const removeboxes = document.getElementsByClassName('square')
for (let i = 0; i < removeboxes.length; i++) {
  for (let y = 5; y <= 7; y++)
  if(removeboxes[i].innerText.includes(`${y}`)) {
    removeboxes[i].remove()
  }
}

// david
const hiddenSquare = document.querySelectorAll(".square");
const hiddenSquareArr = [...hiddenSquare];
for (let i = 0; i < hiddenSquareArr.length; i++) {
  let squareNum = hiddenSquareArr[i].innerText;
  if (squareNum >= 5 && squareNum <= 7) hiddenSquareArr[i].remove();
}
