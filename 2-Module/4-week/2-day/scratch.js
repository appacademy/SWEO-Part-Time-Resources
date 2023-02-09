class Queue {
  constructor() {
    this.store = new Array()
  }

  size() {
    // returns the length of the queue
    return  this.store.length
  }

  enqueue(ele) {
    //adds ele to end of queue
    this.store.push(ele)
    return true
  }

  dequeue() {
    //remove the first element
    return this.store.shift()
  }

  peek() {
    //return the first element
    return this.store[0]
  }
}
