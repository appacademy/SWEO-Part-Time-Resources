// "🍊", "🍌", "🍎", "🍑", "🍒"

class Board {
  constructor(rowCount, colCount, gemCount) {
    this.colCount = colCount;
    this.rowCount = rowCount
    this.gemCount = gemCount;
    // Generate grids until a grid with no combos occurs
    do {
      this.grid = this.generateGrid()
    } while (this.checkGridCombos())
  }

  generateGrid() {
    const grid = []
    for (let ci = 0; ci < this.colCount; ci++) {
      const gemColumn = []
      this.addGems(gemColumn)
      grid.push(gemColumn)
    }
    return grid;
  }

  getGem(ri, ci) {
    return this.grid[ci][ri]
  }

  getRow(ri) {
    const row = []
    for (let ci = 0; ci < this.colCount; ci++) {
      row.push(this.grid[ci][ri])
    }
    return row;
  }

  checkArrayCombos(arr, i) {
    // Iterate through arr from start index i until comparing value diffs from
    // original value
    const gemValue = arr[i];
    const indexes = [i];
    let count = 1;
    while (gemValue === arr[i + count]) {
      indexes.push(i + count);
      count++;
    }
    // Only return indexes if arr has matching 3+ combo
    if (indexes.length >= 3) return indexes;
    else return false;
  }

  checkRowColCombos(ci, ri) {
    const combos = []
    const rowIndexes = this.checkArrayCombos(this.grid[ci], ri)
    if (rowIndexes) combos.push(...rowIndexes.map(rowIndex => [rowIndex, ci]))
    const columnIndexes = this.checkArrayCombos(this.getRow(ri), ci)
    if (columnIndexes) combos.push(...columnIndexes.map(i => [ri, i]))
    return combos;
  }

  checkGridCombos() {
    let comboCoords = []

    // Check every gem for row/col combos of 3+ gems
    for (let ci = 0; ci < this.colCount; ci++) {
      for (let ri = 0; ri < this.rowCount; ri++) {
        const coords = this.checkRowColCombos(ci, ri)
        if (coords) comboCoords.push(...coords)
      }
    }

    if (!comboCoords.length) return false;
    // Create Set, join coords into strings for comparison to eliminate dupes
    let uniqueCoords = new Set(comboCoords.map(coord => coord.join("")))
    // Convert back to 2D array of coords and return it
    return Array.from(uniqueCoords).map(coords => coords.split(""))
  }

  removeGems(coords) {
    coords.forEach(coord => {
      const [row, col] = coord
      this.grid[col][row] = null;
    })
  }

  addGems(column) {
    while (column.length < this.rowCount) {
      column.unshift(Math.floor(Math.random() * this.gemCount))
    }
    return column
  }

  updateBoardGems(coords) {
    // Replace gems at all coordinates with null values
    this.removeGems(coords)

    // Filter nulls from columns, then replace with new gem values from the top
    for (let ci = 0; ci < this.colCount; ci++) {
      this.grid[ci] = this.grid[ci].filter(gem => gem !== null);
      this.addGems(this.grid[ci])
    }
    return coords.length
  }

  verifyAdjacency(coordA, coordB) {
    // check coords are not identical
    if (coordA.join("") === coordB.join("")) return false;

    // check coordB is no more than 1 removed from coordB
    const colRange = [coordA[1], coordA[1] + 1, coordA[1] - 1]
    const rowRange = [coordA[0], coordA[0] + 1, coordA[0] - 1]
    if (!colRange.includes(coordB[1])) return false;
    if (!rowRange.includes(coordB[0])) return false;

    return true;
  }

  swapGems(coordA, coordB) {
    // Create grid copy, then swap gem values for input coordinates
    const newGrid = [...this.grid]
    const [ca, ra, cb, rb] = [...coordA, ...coordB]
    const gemA = newGrid[ca][ra]
    const gemB = newGrid[cb][rb]
    newGrid[ca][ra] = gemB;
    newGrid[cb][rb] = gemA;

    // If swap creates matches, update this.grid with changes and return matches
    const matches = this.checkGridCombos()
    if (matches) {
      this.grid = newGrid;
      return matches
    }

    // If swap creates no matches, return false and leave this.grid unchanged
    return false;
  }

}

module.exports = Board;