

// create a two dimensional UI for a given row and column

// --------------Grid---------------
const createGrid = () => {
    // create the grid container element and add it to the body, you can just create a div element
    const gridContainer = document.createElement("div");
    gridContainer.className = "grid";
    document.body.appendChild(gridContainer);

    // we should abstract the population of the grid to another function
    let rowNum = 10;
    let colNum = 5;
    populateGrid(rowNum, colNum);

}

const populateGrid = (rowNum, colNum) => {
    // select the "gridContainer" we created in createGrid. 
    const gridContainer = document.querySelector("div.grid");

    //now create a 2d ui where the first loop will represent the row, and the inner loop will be the cells(column)
    for(let i=0; i<rowNum; i++){
        // first loop will give us the rows, so create a variable called "rowEl" that willl be a container div element that will later host the cells. 
        // let row =
        const rowEl = document.createElement("div");

        //set the class attribute of the element we just created to have a class of "row"
        rowEl.className = "row"; //you can also use setAttribute

        // add the row element to the end of the gridContainer
        gridContainer.appendChild(rowEl);

        // now work on the inner loop that will loop through
        for(let j=0; j<colNum; j++){
             // create a div element for the cell , store it in a variable called "cell"
            const cell = document.createElement("div");

            // set the "cell" class attribute to have the value of "col"
            cell.className = "col";

            // now add the cell we created to the end of the "rowEl" as a child
            rowEl.appendChild(cell);


            //add to the cell the coordinates of its row and column by using data- (hint, use setAttribute or dataset)
            cell.setAttribute("data-row", i) // same as: cell.dataset.row = i
            cell.setAttribute("data-col", j) // same as: cell.dataset.col = j

            // then add an event listener to the cell, so that when it is clicked, we can add some logic to it, like logging out the row number and col number of the cell. (bonus if you can change the inner text of the cell to display the col and row)
            cell.addEventListener("click", ()=>{
                // log the cell's row and cell's col (hint use cell.dataset from data-)
                const numberRow = cell.dataset.row
                const numberCol = cell.dataset.col
        
                console.log("row/col:", numberRow  + "/" + numberCol)
                cell.innerText = `${cell.dataset.row}:${cell.dataset.col}`
            });
        }
    }

}

// ----------------execute and create the grid!---------
document.addEventListener('DOMContentLoaded', () => {
    createGrid();
});