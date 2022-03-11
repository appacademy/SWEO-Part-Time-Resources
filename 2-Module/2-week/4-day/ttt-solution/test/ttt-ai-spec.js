const { expect } = require('chai');

const ComputerPlayer = require("../class/computer-player");
const TTT = require("../class/ttt");

describe ('ComputerPlayer', function () {

  let cpu;
  let grid;

  before(function() {
    cpu = new ComputerPlayer();
  });

  it('can produce a list of all valid moves', function () {

    grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]

    let validMoves = ComputerPlayer.getValidMoves(grid);
    expect(validMoves.length).to.equal(9);

    for (let i = 0 ; i < validMoves.length ; i++) {
      let move = validMoves[i];
      grid[move.row][move.col] = 'X';
    }

    expect(grid).to.deep.equal([['X','X','X'],['X','X','X'],['X','X','X']])

  });


  it('can produce a list of all valid moves that excludes occupied slots', function () {

    grid = [[' ',' ','O'],
            [' ','X',' '],
            ['O',' ',' ']]

    let validMoves = ComputerPlayer.getValidMoves(grid);
    expect(validMoves.length).to.equal(6);

    expect(validMoves).to.deep.include({row: 0, col: 0});
    expect(validMoves).to.deep.include({row: 0, col: 1});
    expect(validMoves).to.deep.include({row: 1, col: 0});
    expect(validMoves).to.deep.include({row: 1, col: 2});
    expect(validMoves).to.deep.include({row: 2, col: 1});
    expect(validMoves).to.deep.include({row: 2, col: 2});

  });


  it('can randomly select moves to fill up a grid', function () {

    grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]

    for (let i = 0 ; i < 9 ; i++) {
      let randomMove = ComputerPlayer.randomMove(grid);
      grid[randomMove.row][randomMove.col] = 'X';
    }

    expect(grid).to.deep.equal([['X','X','X'],['X','X','X'],['X','X','X']])

  });


  it('can correctly move when there is a win on the board', function () {

    grid = [['X','X',' '],
            ['O',' ',' '],
            ['O',' ',' ']]

    let smartMove = ComputerPlayer.getSmartMove(grid, 'X');

    expect(smartMove).to.deep.equal({row: 0, col: 2});

  });


  it('can correctly block when there is an opposing win possible', function () {

    grid = [['X',' ',' '],
            ['X',' ',' '],
            ['O','O',' ']]

    let smartMove = ComputerPlayer.getSmartMove(grid, 'X');

    expect(smartMove).to.deep.equal({row: 2, col: 2});

  });


  it('will choose the win when there is choice between win and block', function () {

    grid = [['X','X',' '],
            [' ',' ',' '],
            ['O','O',' ']]

    let smartMove = ComputerPlayer.getSmartMove(grid, 'X');

    expect(smartMove).to.deep.equal({row: 0, col: 2});

  });


  it('will block traps', function () {

    grid = [['O','X',' '],
            [' ','X',' '],
            [' ',' ','O']]

    let smartMove = ComputerPlayer.getSmartMove(grid, 'X');

    expect(smartMove).to.deep.equal({row: 2, col: 1});

  });


  // it('can play 1000 games without losing', function () {

  //   let losses = 0;
  //   let wins = 0;
  //   let ties = 0;
  //   for (let i = 0 ; i < 1000 ; i++) {

  //     grid = [[' ',' ',' '],
  //             [' ',' ',' '],
  //             [' ',' ',' ']];

  //     let turn = 0;
  //     let players = Math.random() > 0.5 ? ['O', 'X'] : ['X', 'O'];

  //     let moves = [];
  //     while (!TTT.checkWin(grid)) {
  //       let player = players[turn % 2];

  //       if (player === 'X') {
  //         let cpuMove = ComputerPlayer.getSmartMove(grid, 'X');
  //         grid[cpuMove.row][cpuMove.col] = 'X';
  //         moves.push(`X: [${cpuMove.row}, ${cpuMove.col}]`);
  //       } else {
  //         let randomMove = ComputerPlayer.randomMove(grid);
  //         grid[randomMove.row][randomMove.col] = 'O';
  //         moves.push(`O: [${randomMove.row}, ${randomMove.col}]`);
  //       }
  //       turn++;
  //     }
  //     if (TTT.checkWin(grid) === 'O') {
  //       losses++;
  //       console.log("LOSS");
  //       console.log(moves);
  //       console.log(grid[0]);
  //       console.log(grid[1]);
  //       console.log(grid[2]);
  //     }
  //     else if (TTT.checkWin(grid) === 'X') wins++;
  //     else ties++;

  //   }

  //   expect (losses).to.equal(0);

  // });

});

