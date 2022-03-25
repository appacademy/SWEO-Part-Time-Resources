export default class Board {
    constructor() {
        this.numRows = 9;
        this.numCols = 9;
        this.ships = [5, 4, 3, 3, 2];
        this.grid = this.populateGrid();
        this.numRemaining = 17;
    }

    populateGrid() {
        const grid = [];
        // Initialize empty board
        for (let i = 0; i < this.numRows; i++) {
            grid.push(Array(this.numCols).fill(null));
        }
        const orientations = ["x+", "x-", "y+", "y-"];
        this.ships.forEach(ship => {
            // Choose orientation and start coord
            let orientation = orientations[Math.floor(Math.random() * 4)];
            let x = Math.floor(Math.random() * this.numCols);
            let y = Math.floor(Math.random() * this.numRows);

            // // While ship doesn't fit
            while (!this.verifyFit(grid, ship, x, y, orientation)) {
                // Choose new orientation and start coord
                orientation = orientations[Math.floor(Math.random() * 4)];
                x = Math.floor(Math.random() * this.numCols);
                y = Math.floor(Math.random() * this.numRows);
            }

            // Set coordinates
            this.setShip(grid, ship, x, y, orientation);
        });
        return grid;
    }

    makeHit(row, col) {
        if (this.grid[row][col]) {
            this.numRemaining--;
        }
        return this.grid[row][col];
    }

    verifyFit(grid, length, x, y, orientation) {
        if (orientation === "x+") {
            if (x + length - 1 > this.numCols - 1) return false;
            if (grid[y].slice(x, x + length).some(el => el !== null)) return false;
        } else if (orientation === "x-") {
            if (x - length + 1 < 0) return false;
            if (grid[y].slice(x - length + 1, x + 1).some(el => el !== null)) return false;
        } else if (orientation === "y+") {
            if (y + length - 1 > this.numRows - 1) return false;
            for(let i = y; i < y + length; i++){
                if(grid[i][x] !== null) return false;
            }
        } else {
            if (y - length + 1 < 0) return false;
            for(let i = y; i > y - length; i--){
                if(grid[i][x] !== null) return false;
            }
        }
        return true;
    }

    setShip(grid, length, x, y, orientation) {
        if (orientation === "x+") {
            for(let i = x; i < x + length; i++) {
                grid[y][i] = length;
            }
        } else if (orientation === "x-") {
            for(let i = x; i > x - length; i--) {
                grid[y][i] = length;
            }
        } else if (orientation === "y+") {
            for(let i = y; i < y + length; i++) {
                grid[i][x] = length;
            }
        } else {
            for(let i = y; i > y - length; i--) {
                grid[i][x] = length;
            }
        }
    } 

    isGameOver() {
        return this.numRemaining === 0;
    }
}