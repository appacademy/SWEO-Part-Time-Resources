import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board);

const removeCellEventListeners = () => {
  const grid = board.grid;

  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      const currentCell = document.querySelector(`div[data-row="${i}"][data-col="${j}"]`)
      currentCell.removeEventListener('click', clickSquare);
    })
  })
}

const endGame = () => {
  const h1 = document.querySelector('h1');
  h1.innerText += ' - You Win!'

  removeCellEventListeners();
}

const clickSquare = (e) => {
  e.preventDefault();

  console.log('clicked');

  const cell = e.target;
  const {row, col} = cell.dataset;

  const hitResult = board.makeHit(row, col);

  if(hitResult){
    cell.classList.add('hit');
    cell.innerHTML = `<p>${hitResult}</p>`
  } else {
    cell.classList.add('miss');
    cell.innerHTML = `<p>x</p>`
  }

  cell.removeEventListener('click', clickSquare);

  if(board.isGameOver()) endGame();
}

const populateBoard = () => {
  const boardContainer = document.getElementById('board-container');

  //implement a reset property here
  boardContainer.innerHTML = "";

  const grid = board.grid;

  grid.forEach((row, i) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    row.forEach((col, j) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col';

      colDiv.setAttribute('data-row', i);
      colDiv.setAttribute('data-col', j);

      colDiv.addEventListener('click', clickSquare);

      rowDiv.appendChild(colDiv)
    })

    boardContainer.appendChild(rowDiv);
  })
}

const createBoard = () => {
  const boardContainer = document.createElement('div');
  boardContainer.setAttribute('id', 'board-container');
  boardContainer.className = 'board';

  document.body.appendChild(boardContainer);

  populateBoard();
}

const resetBoard = () => {
  const h1 = document.querySelector('h1');
  h1.innerText = "Battleship";

  board = new Board();

  populateBoard();
}


const createResetButton = () => {
  const btn = document.createElement('button');
  btn.innerText = "reset";

  btn.addEventListener('click', resetBoard);

  document.body.appendChild(btn);
}

createResetButton();
createBoard();