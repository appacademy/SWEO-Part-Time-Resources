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
    if (!this.allowedNums.has(num)) {
    this.allowedNums.add(num);
    return `${num} added to allowedNums`;
    } else {
    return `${num} already in allowedNums`;
    }
  }

  /* Returns true if the number is allowed, false otherwise */
  isNumAllowed(num) {
    return this.allowedNums.has(num);
  }

  /*
  Add a new number to the back of the numList
  Returns value at the back of numList
  */
  addNumToBack(num) {
    if (this.isNumAllowed(num)) this.numList.enqueue(num);
    return this.numList.tail.value;
  }

  /*
  Remove and return the first number in the numList
  If numList is empty, return undefined
  */
  getFirstNum() {
    if(this.numList.length > 0){
    return this.numList.dequeue();
    } else {
    return undefined;
    }
  }

  /* Returns the count of nums in numList */
  numCount() {
    // let count = 0;
    // while (this.numList[count] !== undefined) {
    // count++;
    // }

    // return count;
    return this.numList.length
  }

  /*
  Resets numList, builds a numlist of integers from 0 to amount
  Only include allowed numbers; returns amount of nums in numList
  */
  buildNumList(amount) {
    this.numList = new LinkedList();

    for (let i = 0; i <= amount; i++) {
    if (this.allowedNums.has(i)) {
    this.numList.enqueue(i);
    }
    }

    return this.numCount();
  }
}
