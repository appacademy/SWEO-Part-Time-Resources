class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);

    // 1 -> 2 -> 3
    // 3.next = 4 // add 4 to the list by making it the .next for the current tail > 3
    // 1 -> 2 -> 3 -> 4
    // this.tail = 4 // reassing the pointer for the last item in the list to be 4

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
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
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/*
Above is the given linked list based queue; it should not be modified
Below is the NumSorter class that is to be refactored
*/
class NumSorter {
  constructor() {
    this.numList = new LinkedList();

    this.allowedNums = new Set();
  }

  /*
  Add a number to the list of allowed numbers
  Should not have any duplicates in allowedNums
  */
  addAllowedNum(num) {
    // if (!this.allowedNums.includes(num)) { // .includes is iterative so it has O(n) time
    //   this.allowedNums.push(num); // .push has the potential to be O(n) time if the array has to be resized in memory
    //   return `${num} added to allowedNums`;
    //   } else {
    //   return `${num} already in allowedNums`;
    //   }


    if (!this.allowedNums.has(num)) { // .has is O(1) time since the num is the key in the set obj. (console.log the set and see what it looks like)
    this.allowedNums.add(num); // .add is O(1) time.
    return `${num} added to allowedNums`;
    } else {
    return `${num} already in allowedNums`;
    }
  }

  /* Returns true if the number is allowed, false otherwise */
  // isNumAllowed(num) {
  //   return this.allowedNums.includes(num); // O(n) time

  /* Returns true if the number is allowed, false otherwise */
  isNumAllowed(num) {
    return this.allowedNums.has(num); // O(1) time
  }

  /*
  Add a new number to the back of the numList
  Returns value at the back of numList
  */
  addNumToBack(num) {
    // if (this.isNumAllowed(num)) this.numList.push(num); // can be O(n) worst case
    // return this.numList[this.numList.length - 1]; // this is O(1) already since the index is the pointer in memory

    if (this.isNumAllowed(num)) this.numList.enqueue(num); // O(1)
    return this.numList.tail.value; // O(1)
  }

  /*
  Remove and return the first number in the numList
  If numList is empty, return undefined
  */
  getFirstNum() {
    // if(this.numList.length > 0){
    //   return this.numList.shift(); // O(n) due to having to update the index of each element after this is removed
    //   } else {
    //   return undefined;
    //   }

    if(this.numList.length > 0){
    return this.numList.dequeue(); // O(1)! No iteration, just updating values.
    } else {
    return undefined;
    }
  }

  /* Returns the count of nums in numList */
  numCount() {
    // let count = 0;
    // while (this.numList[count] !== undefined) { // while loop based on length of the numList is O(n)
    // count++;
    // }
    
    // return count;

    return this.numList.length; // O(1) since we have this saved as a property!
  }

  /*
  Resets numList, builds a numlist of integers from 0 to amount
  Only include allowed numbers; returns amount of nums in numList
  */
  buildNumList(amount) {
    // this.numList = [];

    // for (let i = 0; i <= amount; i++) { // this loop is O(n);
    // if (this.allowedNums.includes(i)) { // .includes is O(n) again
    // this.numList.push(i); // .push could be O(n) if array has to be resized.
    // } // average case this is O(n^2) if the .push is O(1), worst case is O(n^3)!!
    // }

    // return this.numCount();

    this.numList = new LinkedList();

    for (let i = 0; i <= amount; i++) { // O(n)
    if (this.allowedNums.has(i)) { // O(1)
    this.numList.enqueue(i); // O(1)
    } // will be O(n)!
    }

    return this.numCount(); // O(1)
  }
}

/* Comment in code below to run local test */

// CONSOLE LOG YOUR SET TO SEE WHAT IT LOOKS LIKE!
const newNumSort = new NumSorter(3);
console.log(newNumSort.addAllowedNum(0));   // '0 added to allowedNums'
console.log(newNumSort.addAllowedNum(1));   // '1 added to allowedNums'
console.log(newNumSort.addAllowedNum(1));   // '1 already in allowedNums'
console.log(newNumSort.addAllowedNum(2));   // '2 added to allowedNums'
console.log(newNumSort.allowedNums) // Set(3) { 0, 1, 2 }

// console.log(newNumSort.isNumAllowed(1));    // true
// console.log(newNumSort.isNumAllowed(5));    // false

// console.log(newNumSort.addNumToBack(1));    // 1
// console.log(newNumSort.addNumToBack(2));    // 2
// console.log(newNumSort.addNumToBack(5));    // 2

// console.log(newNumSort.getFirstNum());      // 1
// console.log(newNumSort.getFirstNum());      // 2
// console.log(newNumSort.getFirstNum());      // undefined

// console.log(newNumSort.numCount());         // 0

// console.log(newNumSort.buildNumList(5));    // 3

// console.log(newNumSort.numCount());         // 3

module.exports = { NumSorter, LinkedList };