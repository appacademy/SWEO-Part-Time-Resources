/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterRoom` class found in the `./problems/03-letter-room.js` file.


The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

******************************************/

const LetterRoom = require("./03-letter-room");

class LetterProcessor {
    constructor(maxLettersPerBin) {
        this.letterRoom = new LetterRoom();
        this.maxLettersPerBin = maxLettersPerBin;
    }

    addLetter(message) {
        // add a letter with the specified message to the last bin added to the letter room
        // if the last bin added is full, add a new bin to the letter room
        let currentBin = this.letterRoom.getLastBin();
        if (!currentBin || currentBin.numLetters() >= this.maxLettersPerBin) {
            currentBin = this.letterRoom.addBin();
        }

        currentBin.addLetter(message);
    }

    removeLetter() {
        // remove a letter from the first bin added to the letter room
        // if the first bin is empty after removing the letter, remove the bin from the letter room
        // if there are no more letters, then console.log 'No more letters to process!'
        let currentBin = this.letterRoom.getFirstBin();
        if (!currentBin) {
            console.log('No more letters to process!');
            return;
        }
        if (currentBin.numLetters() === 1) {
            this.letterRoom.removeBin();
        }

        return currentBin.removeLetter();
    }
}

module.exports = LetterProcessor;