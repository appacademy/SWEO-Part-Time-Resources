import Board from "./board.js";

let board = new Board(); // creates a new game board
//!!ADD

// // Examine the grid of the game board in the browser console.
// // Create the UI of the game using HTML elements based on this grid.
// console.log(board.grid);
//!!END_ADD

//!!START
/******************************* RESET BUTTON *******************************/
const resetBoard = () => {
    const gameOver = document.querySelector(".game-over");
    gameOver.innerText = '';

    board = new Board();
    populateBoard();
};

const createResetButton = () => {
    const reset = document.createElement("button");
    reset.innerText = "Reset Game";
    reset.className = "reset";
    reset.addEventListener("click", resetBoard);

    document.body.appendChild(reset);
};

/***************************** GAME OVER MESSAGE *****************************/
const createGameOverMessage = () => {
    const gameOver = document.createElement("div");
    gameOver.className = "game-over";
    document.body.appendChild(gameOver);
};

const removeCellEventListeners = () => {
    const { grid } = board;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const cell = document.querySelector(`div[data-row="${i}"][data-col="${j}]`);
            // OR:
            // const boardContainer = document.querySelector("div.board");
            // const cell = boardContainer.children[i].children[j]
            cell.removeEventListener("click", chooseSquare);
        }
    }
};

const endGame = () => {
    const gameOver = document.querySelector(".game-over");
    gameOver.innerText = "YOU WIN!"
    removeCellEventListeners();

    alert('YOU WIN!');
};

/*********************************** BOARD ***********************************/
const chooseSquare = e => {
    e.preventDefault();

    const cell = e.target;
    // get the row and column data attributes from the element clicked
    const { row, col } = cell.dataset;

    // update the board and get the value at the row and column in the board
    const value = board.makeHit(row, col);

    if (value) {
        // if the value is a ship, indicate that the cell is hit and add the
            // value as the text inside of the element
        cell.classList.add("hit");
        cell.innerHTML = `<span>${value}</span>`;
    } else {
        // if the value is not a ship, indicate that the user has missed
        cell.classList.add("miss");
    }

    // remove the click event listener on the cell
    cell.removeEventListener("click", chooseSquare);

    // check if the game is over
    if (board.isGameOver()) endGame();
};

const createBoard = () => {
    const boardContainer = document.createElement("div");
    boardContainer.className = "board";
    document.body.appendChild(boardContainer);

    // populate the board with rows and columns
    populateBoard();
};

const populateBoard = () => {
    const boardContainer = document.querySelector("div.board");
    // remove all child elements from the board
    boardContainer.innerHTML = "";

    const grid = board.grid;

    for (let i = 0; i < grid.length; i++) {
        // create a div for each row
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < grid[0].length; j++) {
            // create a div for the cell specified by the row and column
            const cell = document.createElement("div");
            cell.className = "col";

            // add the row and column as data attributes on the element
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", chooseSquare);

            // add the cell to the end of the row element as a child
            row.appendChild(cell);
        }

        // add the row element to the end of the board element as a child
        boardContainer.appendChild(row);
    }

    // add the board to the body
    document.body.appendChild(boardContainer);
};


/****************************** RENDER ELEMENTS ******************************/
document.addEventListener('DOMContentLoaded', () => {
    createResetButton();
    createGameOverMessage();
    createBoard();
});
