/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/

const LetterBin = require('./02-letter-bin');

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LetterRoom {
    constructor() { // since i saw the node class above, i knew they wanted a linked list
        // create an empty queue
        this.head = null; 
        this.tail = null; // included a this.tail to keep our time complexity constant O(1)
        this.length = 0;
    }

    getLastBin() {
        // return the last bin added to the queue
        // if there are no bins in the queue, return null
        if (!this.tail) return null;
        return this.tail.value; // O(1)
    }

    getFirstBin() {
        // return the first bin added to the queue
        // if there are no bins in the queue, return null
        if (!this.head) return null;
        return this.head.value; // O(1)
    }

    numBins() {
        // returns the number of bins in the queue
        return this.length; // O(1)
    }

    addBin() {
        // create a new bin and add it to the end of the queue
        // returns the newly created bin
        // WARNING: you cannot add properties to a LetterBin like .next
        const bin = new LetterBin();
        const node = new Node(bin, null); // create node 

        if (!this.tail){ // check if the list is empty
            this.head = node; // reasign value of this.head variable to point to this one too
        } else {
            this.tail.next = node; // if its not empty, add this node to the list by making it the .next of the last thing currently in the list
        }
        this.tail = node; // reassign the this.tail variable to point to the correct last item
        this.length++;
        return bin;

    }

    removeBin() {
        // remove the bin at the beginning of the queue
        // returns the removed bin
        const bin = this.head; // grab ref to current head
        if (this.length === 1){ // if there's only one thing, need to remove the tail ref as well
            this.tail = null;
        } 
        this.head = this.head.next; // set the head to now point to the second item in the list. (if the list is empty .next will be null and reassing the head to be null instead)
        this.length--;
        return bin.value;
    }
}

module.exports = LetterRoom;