import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// --------------game board---------------
const createBoard = () => {
    // first create the board container, typically a div element and then populate the board insid here
    const boardContainer = document.createElement("div");
    boardContainer.className = "board";
    document.body.appendChild(boardContainer);

    // we should abstract the population of the board to another function, so create the populateBoard function.
    populateBoard();

}

const populateBoard = () => {
    // select the board container we created
    const boardContainer = document.querySelector("div.board");

    // remove all child elements from the board, clearing it up
    boardContainer.innerHTML = "";

    //grab the board instance from the Board class
    const grid = board.grid; //[[3,3,3, null, null, ...], ...]
    for (let i = 0; i < grid.length; i++) {
        // first loop will give us the rows, so create a container div element that will host children of elements columns
        const row = document.createElement("div");
        row.className = "row"; //you can also use setAttribute

        for (let j = 0; j < grid[0].length; j++) {
            // create a div for the cell 
            const cell = document.createElement("div");
            cell.className = "col";

            //add the coordinates of its row and column by using data-
            cell.setAttribute("data-row", i) // same as: cell.dataset.row = i
            cell.setAttribute("data-col", j) // same as: cell.dataset.col = j

            // then add an event listener to the cell, so that when it is clicked, we can add some logic to it, like adding class styles, track if a hit is made, etc.
            cell.addEventListener("click", chooseSquare);
            
            // now add the cell we created to the end of the row as a child
            row.appendChild(cell);
        }
        // add the row element to the end of the board container
        boardContainer.appendChild(row);
    }

    // now add the boardContainer to the body
    document.body.appendChild(boardContainer);
}

// if a square is clicked, this logic will be executed
const chooseSquare = e => {
    e.preventDefault();

    // we can get the cell or element tha was clicked on by accessing it through the event object .target property
    const cell = e.target;

    // get the row and column data attributes from the element clicked
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    console.log("row/col:", row + "/" + col)

    // update the board and get the value at the row and column in the board instance
    const value = board.makeHit(row, col); //value will be null or a number

    if (value) {
        // if the value is a ship, indicate that the cell is hit and add the
        // value as the text inside of the element
        cell.classList.add("hit");
        cell.innerHTML = `<span>${value}</span>`;
    } else {
        // if the value is not a ship, indicate that the user has missed
        cell.classList.add("miss");
    }



    // after cell has been chosen, it's best to remove the listener on it to prevent retriggering of logic
    // remove the click event listener on the cell
    cell.removeEventListener("click", chooseSquare);

    // after making a guess, check if the game is over after we makeHit
    // check if the game is over
    if (board.isGameOver()) {
        endGame()
    };
};

// --------------GAME OVER Handlers---------------
const createGameOverMessage = () => {
    const gameOver = document.createElement("div");
    gameOver.className = "game-over";
    document.body.appendChild(gameOver);
};


const endGame = () => {
    const gameOver = document.querySelector(".game-over");
    gameOver.innerText = "YOU WIN!"
    alert('YOU WIN!');
};

// --------------Reset Handlers---------------
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

// ----------------execute and create the board and messages!---------
document.addEventListener('DOMContentLoaded', () => {
    createResetButton();
    createGameOverMessage();
    createBoard();
});