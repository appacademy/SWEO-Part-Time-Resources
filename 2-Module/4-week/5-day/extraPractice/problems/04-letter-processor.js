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
        const lastBin = this.letterRoom.getLastBin() // grab the last bin
        if (!lastBin || lastBin.length >= this.maxLettersPerBin){ // if there is no bin or the length is too long
            const newBin = this.letterRoom.addBin(); // create a new bin
            newBin.addLetter(message) // add the letter to the new bin instead
        } else lastBin.addLetter(message); // else just add the letter
    }

    removeLetter() {
        // remove a letter from the first bin added to the letter room
        // if the first bin is empty after removing the letter, remove the bin from the letter room
        // if there are no more letters, then console.log 'No more letters to process!'
        const firstBin = this.letterRoom.getFirstBin(); // grab the first bin
        if (!firstBin) console.log('No more letters to process!'); // if there isnt one, there's no more letters!
        else {
            const letter = firstBin.removeLetter(); // otherwise grab the next letter
            if (firstBin.numLetters() === 0) this.letterRoom.removeBin(); // if it was the last one, remove the bin
            return letter;
        }
    }
}

module.exports = LetterProcessor;