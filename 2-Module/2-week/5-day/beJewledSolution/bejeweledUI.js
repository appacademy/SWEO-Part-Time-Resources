// IMPORTS
const Board = require("./board")
const keypress = require('keypress');

class BejeweledUI {
  constructor(
    rows = "12345678".split(""),
    columns = "ABCDEF".split(""),
    gems = "🍦🍧🍪🍰🧁🍫🍬🍭🍮🥨".split(""),
  ) {
    this.rows = rows;
    this.columns = columns;
    this.gems = gems;
    this.board = new Board(rows.length, columns.length, gems.length)
    this.score = 0;
    this.cursor = {row: 0, col: 0};
    this.select = null;
    this.messages = [];
  }

  startGame() {

    this.messages.push("");
    this.messages.push("***** BEJEWELED *****");
    this.messages.push("");
    this.messages.push("HOW TO PLAY:");
    this.messages.push("  1. Move the cursor with arrow keys or w/a/s/d.");
    this.messages.push("  2. Hit enter/return to select adjacent gems to swap");
    this.messages.push("  3. Create a row or column of three or more matching gems.");
    this.messages.push("  4. Raise your score as high as you can!");
    this.promptUser();

  }

  printHelp() {
    this.messages.push("Controls:");
    this.messages.push("  arrow keys, w/a/s/d: move the cursor");
    this.messages.push("  enter/return: select gems");
    this.messages.push("  q: quit");
  }

  clearMessages() {
    this.messages = [];
  }

  showMessages() {
    for (let i = 0 ; i < this.messages.length ; i++) {
      console.log(this.messages[i]);
    }
    this.clearMessages();
  }

  promptUser() {
    this.showBoard();

    const processMove = this.processMove.bind(this);
    const processSelect = this.processSelect.bind(this);
    const printHelp = this.printHelp.bind(this);

    keypress(process.stdin);

    // listen for the "keypress" event
    process.stdin.on('keypress', function (ch, key) {
      if (['w', 'a', 's', 'd', 'left', 'right', 'up', 'down'].indexOf(key.name) >= 0) {
        processMove(key.name);
      } else if (['return', 'enter'].indexOf(key.name) >= 0) {
        processSelect();
      } else if (key.name === 'q') { // Quit
        process.stdin.pause();
        console.log("\nGreat job! Thank you for playing! \nGoodbye.\n");
      } else {
        console.log("\nInvalid command")
        printHelp();
      }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

  }



  processSelect() {

    if (this.select) {

      if (this.select.row === this.cursor.row &&
          this.select.col === this.cursor.col) {

        this.select = null;
      } else {
        // Try Swap
        this.trySwap();
      }

    } else {
      this.select = {row: this.cursor.row, col: this.cursor.col};
    }

    this.showBoard();
  }

  processMove(cmd) {
    let minCol = 0;
    let minRow = 0;
    let maxCol = this.columns.length - 1;
    let maxRow = this.rows.length - 1;

    if (this.select) {
      minCol = Math.max(minCol, this.select.col - 1);
      minRow = Math.max(minRow, this.select.row - 1);
      maxCol = Math.min(maxCol, this.select.col + 1);
      maxRow = Math.min(maxRow, this.select.row + 1);
    }

    if (cmd === 'w' || cmd === 'up') {
      this.cursor.row = Math.max(minRow, this.cursor.row - 1);
      if (this.select && this.select.col !== this.cursor.col) {
        this.cursor.col = this.select.col;
      }
    } else if (cmd === 'a' || cmd === 'left') {
      this.cursor.col = Math.max(minCol, this.cursor.col - 1);
      if (this.select && this.select.row !== this.cursor.row) {
        this.cursor.row = this.select.row;
      }
    } else if (cmd === 's' || cmd === 'down') {
      this.cursor.row = Math.min(maxRow, this.cursor.row + 1);
      if (this.select && this.select.col !== this.cursor.col) {
        this.cursor.col = this.select.col;
      }
    } else if (cmd === 'd' || cmd === 'right') {
      this.cursor.col = Math.min(maxCol, this.cursor.col + 1);
      if (this.select && this.select.row !== this.cursor.row) {
        this.cursor.row = this.select.row;
      }
    }
    this.showBoard();
  }

  trySwap() {
    const cursorCoords = [this.cursor.col, this.cursor.row];
    const selectCoords = [this.select.col, this.select.row];
    //  3. able to make at least one valid combo
    const makesCombo = this.board.swapGems(cursorCoords, selectCoords);
    if (!makesCombo) {
      // Swap back if combos don't complete
      this.board.swapGems(cursorCoords, selectCoords);
      this.select = null;
      this.messages.push("OOP! Inputs don't make any combos.");
      return false;
    }
    while (this.board.checkGridCombos()) {
      this.select = null;
      const combos = this.board.checkGridCombos();
      this.showCombos(combos);
      this.updateScore();
    }
  }

  highlight(tile, color = 'cyan') {
    if (color === 'cyan') {
      return `\x1b[46m${tile}\x1b[0m`;
    } else if (color === 'magenta') {
      return `\x1b[45m${tile}\x1b[0m`;
    } else if (color === 'yellow') {
      return `\x1b[43m${tile}\x1b[0m`;
    } else {
      return tile;
    }
  }

  showBoard() {
    console.clear();
    console.log(`    SCORE: ${this.score}`);

    // See if select exists and is on the cursor
    let selectOnCursor = this.select && this.cursor.col === this.select.col;
    selectOnCursor = selectOnCursor && this.cursor.row === this.select.row;

    this.rows.forEach((row, i) => {
      const gems = this.board.getRow(i).map(ri => this.gems[ri]);
      // Highlight the selected gem yellow if it overlaps with cursor
      if (selectOnCursor && i === this.select.row) {
        gems[this.select.col] = this.highlight(gems[this.select.col], 'yellow');
      }
      // Highlight the selected gem magenta
      else if (this.select && i === this.select.row) {
        gems[this.select.col] = this.highlight(gems[this.select.col], 'magenta');
      }
      // Highlight the cursor cyan
      if (i === this.cursor.row && !selectOnCursor) {
        gems[this.cursor.col] = this.highlight(gems[this.cursor.col], 'cyan');
      }
      console.log(`\t ${row} ${gems.join(" ")}`);
    });
    this.showMessages();
  }

  showCombos(comboCoords) {
    let comboMsg = "\nCombo! ";
    comboCoords.forEach(coord => {
      comboMsg += `${this.gems[this.board.getGem(coord[0], coord[1])]}`;
    })
    this.messages.push(comboMsg)
  }

  updateScore() {
    const combos = this.board.checkGridCombos()
    if (combos) {
      this.score += combos.length;
      this.board.updateBoardGems(combos);
    }
  }
  
}


module.exports = BejeweledUI;