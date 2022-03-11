
class ComputerPlayer {

  static getValidMoves(grid) {
    //!!START
    const validMoves = [];
    for (let row = 0 ; row < 3 ; row++) {
      for (let col = 0 ; col < 3 ; col++) {
        if (grid[row][col] === ' ') {
          validMoves.push({row: row, col: col});
        }
      }
    }

    if (validMoves.length === 0) {
      throw Error("no valid moves");
    }

    return validMoves;
    //!!END
  }

  static randomMove(grid) {
    //!!START
    const validMoves = ComputerPlayer.getValidMoves(grid);

    return validMoves[Math.floor(Math.random() * validMoves.length)];
    //!!END
  }

  static getWinningMoves(grid, symbol) {
    //!!START
    const TTT = require("./ttt");

    const validMoves = ComputerPlayer.getValidMoves(grid);

    const winningMoves = [];

    // Check for wins one move away
    for (let i = 0 ; i < validMoves.length ; i++) {
      let gridCopy = [[...grid[0]], [...grid[1]], [...grid[2]]];
      let move = validMoves[i];

      gridCopy[move.row][move.col] = symbol;

      if (TTT.checkWin(gridCopy) === symbol) winningMoves.push(move);
    }

    return winningMoves;
    //!!END
  }
  //!!START SILENT
  static getMustBlocks(grid, symbol) {

    const opponentSymbol = symbol === 'X' ? 'O' : 'X';

    return ComputerPlayer.getWinningMoves(grid, opponentSymbol);

  }
  //!!END

  static getSmartMove(grid, symbol) {
    //!!START
    const opponentSymbol = symbol === 'X' ? 'O' : 'X';

    const validMoves = ComputerPlayer.getValidMoves(grid);

    // Check for wins one move away
    const winningMoves = ComputerPlayer.getWinningMoves(grid, symbol);
    if (winningMoves.length > 0) return winningMoves[0];

    // Check for must-blocks
    const mustBlock = ComputerPlayer.getMustBlocks(grid, symbol);
    if (mustBlock.length > 0) return mustBlock[0];

    // Check for valid wins 2 moves away
    for (let i = 0 ; i < validMoves.length ; i++) {
      let move = validMoves[i];
      let gridCopy = [[...grid[0]], [...grid[1]], [...grid[2]]];
      gridCopy[move.row][move.col] = symbol;

      let enemyBlocks = ComputerPlayer.getMustBlocks(grid, opponentSymbol);
      for (let j = 0 ; j < enemyBlocks.length ; j++) {
        let newGridCopy = [[...gridCopy[0]], [...gridCopy[1]], [...gridCopy[2]]];
        let enemyBlock = enemyBlock[j];
        newGridCopy[enemyBlock.row][enemyBlock.col] = opponentSymbol;

        let blockWinningMoves = ComputerPlayer.getWinningMoves(newGridCopy, symbol);
        if (blockWinningMoves.length > 0) return validMoves[i];
      }
    }


    // Otherwise, prioritize the center
    if (grid[1][1] === ' ') return {row: 1, col: 1};

    // Otherwise, prioritize adjacent corners
    if ((grid[0][2] === ' ') &&
        (grid[2][2] === opponentSymbol || grid[0][0] === opponentSymbol)) return {row: 0, col: 2};
    if ((grid[0][0] === ' ') &&
        (grid[2][0] === opponentSymbol || grid[0][2] === opponentSymbol)) return {row: 0, col: 0};
    if ((grid[2][2] === ' ') &&
        (grid[2][0] === opponentSymbol || grid[0][2] === opponentSymbol)) return {row: 2, col: 2};
    if ((grid[2][0] === ' ') &&
        (grid[2][2] === opponentSymbol || grid[0][0] === opponentSymbol)) return {row: 2, col: 0};

    // Otherwise, prioritize general corners
    if (grid[0][0] === ' ') return {row: 0, col: 0};
    if (grid[0][2] === ' ') return {row: 0, col: 2};
    if (grid[2][0] === ' ') return {row: 2, col: 0};
    if (grid[2][2] === ' ') return {row: 2, col: 2};

    // Otherwise, pick randomly
    return ComputerPlayer.randomMove(grid);

  }
    //!!END
}

module.exports = ComputerPlayer;
