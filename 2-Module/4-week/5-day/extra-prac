const Letter = require('./letter');

class LetterBin {
    constructor() {
        // create stack of letters
        //!!START
        this.letters = [];
        //!!END
    }

    numLetters() {
        // returns the number of letters in the stack
        //!!START
        return this.letters.length;
        //!!END
    }

    addLetter(message) {
        // creates a letter and adds it to the top of the stack
        // returns the newly created letter
        // See './problems/letter.js' for the Letter class
        //!!START
        const letter = new Letter(message);
        this.letters.push(letter);
        return letter;
        //!!END
    }

    removeLetter() {
        // removes a letter at the top of the stack
        // returns the removed letter
        //!!START
        return this.letters.pop();
        //!!END
    }
}

module.exports = LetterBin

const LetterBin = require('./02-letter-bin');

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LetterRoom {
    constructor() {
        // create an empty queue
        // Hint: you may create helper classes in this file to use
        //!!START
        this.head = null;
        this.tail = null;
        this.length = 0;
        //!!END
    }

    getLastBin() {
        // return the last bin added to the queue
        // if there are no bins in the queue, return null
        //!!START
        if (!this.tail) return null;
        return this.tail.value;
        //!!END
    }

    getFirstBin() {
        // return the first bin added to the queue
        // if there are no bins in the queue, return null
        //!!START
        if (!this.head) return null;
        return this.head.value;
        //!!END
    }

    numBins() {
        // returns the number of bins in the queue
        //!!START
        return this.length;
        //!!END
    }

    addBin() {
        // create a new bin and add it to the end of the queue
        // returns the newly created bin
        // WARNING: you cannot add properties to a LetterBin like .next
        //!!START
        const newBin = new LetterBin();
        const newNode = new Node(newBin);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return newBin;
        //!!END
    }

    removeBin() {
        // remove the bin at the beginning of the queue
        // returns the removed bin
        //!!START
        if (!this.head) {
            return null;
        }

        const returnValue = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.length--;
        return returnValue;
        //!!END
    }
}

module.exports = LetterRoom;

class LetterProcessor {
    constructor(maxLettersPerBin) {
        this.letterRoom = new LetterRoom();
        this.maxLettersPerBin = maxLettersPerBin;
    }

    addLetter(message) {
        // add a letter with the specified message to the last bin added to the letter room
        // if the last bin added is full, add a new bin to the letter room
        //!!START
        let currentBin = this.letterRoom.getLastBin();
        if (!currentBin || currentBin.numLetters() >= this.maxLettersPerBin) {
            currentBin = this.letterRoom.addBin();
        }

        currentBin.addLetter(message);
        //!!END
    }

    removeLetter() {
        // remove a letter from the first bin added to the letter room
        // if the first bin is empty after removing the letter, remove the bin from the letter room
        // if there are no more letters, then console.log 'No more letters to process!'
        //!!START
        let currentBin = this.letterRoom.getFirstBin();
        if (!currentBin) {
            console.log('No more letters to process!');
            return;
        }
        if (currentBin.numLetters() === 1) {
            this.letterRoom.removeBin();
        }

        return currentBin.removeLetter();
        //!!END
    }
}

module.exports = LetterProcessor;

class Letter {
    constructor(message) {
        this.message = message;
    }
}

module.exports = Letter;
