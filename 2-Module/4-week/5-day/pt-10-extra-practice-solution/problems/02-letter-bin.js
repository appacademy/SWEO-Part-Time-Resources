/******************************************

You will be filling out the code in three different classes to implement a
letter processor.

- `LetterBin` - `./problems/02-letter-bin.js`
- `LetterRoom` - `./problems/03-letter-room.js`
- `LetterProcessor` - `./problems/04-letter-processor.js`

One class, `Letter` in `./problems/letter.js`, is already implemented for you
and is there for you to use in the `LetterBin` class.

A `LetterProcessor` has a `LetterRoom` that holds a queue of `LetterBin`s. Each
`LetterBin` has a stack of `Letter`s.

The `LetterBin` should be able to add a `Letter` to the top of its stack and
remove a `Letter` from the top of its stack.

The `LetterRoom` should be able to add a `LetterBin` to the end of its queue and
remove a `LetterBin` from the beginning of its queue.

The `LetterProcessor` can add a `Letter` to the last `LetterBin` added to the
`LetterRoom`'s queue. It can also remove a `Letter` from the first `LetterBin`
added to the `LetterRoom`'s queue.

The catch is that there is an arbitrary maximum amount of `Letter`s that a
`LetterBin` can hold, `maxLettersPerBin`. When a `LetterBin` gets full, another
`LetterBin` should be added to the `LetterRoom`'s queue. The next `Letter` added
should be added to the new `LetterBin` at the end of the queue.



The first class is called `LetterBin`. `LetterBin` should hold a stack of
letters. Each letter should be an instance of the `Letter` class from the
`./problems/letter.js` file. There are methods on the `LetterBin` class to add
and remove `Letter`'s and to get the total number of letters in the stack.
Implement these methods.

******************************************/

const Letter = require('./letter');

class LetterBin {
    constructor() {
        // create stack of letters
        this.letters = [];
    }

    numLetters() {
        // returns the number of letters in the stack
        return this.letters.length;
    }

    addLetter(message) {
        // creates a letter and adds it to the top of the stack
        // returns the newly created letter
        // See './problems/letter.js' for the Letter class
        const letter = new Letter(message);
        this.letters.push(letter);
        return letter;
    }

    removeLetter() {
        // removes a letter at the top of the stack
        // returns the removed letter
        return this.letters.pop();
    }
}

module.exports = LetterBin;