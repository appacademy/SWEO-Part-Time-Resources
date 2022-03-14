
class PowerGem extends Gem {
  constructor(row, column, char, value) {
    super(row, column, char, value);
    this
  }
  
  zapRow(board) {
    const row = board.getRow(this.row);
    board.updateBoardGems(row)
  }
  
  zapColumn(board) {
    board.updateBoardGems(board.grid[this.column])
  }
  
  zapAlike(board) {}
  
}

class Gem {
  constructor(row, column, char, value) {
    this.row = row;
    this.column = column;
    this.value = value;
    this.char = char;
  }

  dropToRow(row) {
    this.row = row;
  }
  
  swapWithGem(gem) {
    [this.row, gem.row] = [gem.row, this.row]
    [this.column, gem.column] = [gem.column, this.column]
    [this.adjacentCoords, gem.adjacentCoords] = [gem.adjacentCoords, this.adjacentCoords]
  }
  
  checkMatch(arr, i) {
    const matches = []
    let count = 1;
    while (this.char === arr[i + count]) {
      matches.push(i + count);
      count++;
    }
    if (matches.length >= 3) return matches;
    else return false;
  }

}

module.exports = Gem;