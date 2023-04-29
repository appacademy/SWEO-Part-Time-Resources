class Queue {
  constructor() {
    this.store = new Array()
  }

  size() {
    // returns the length of the queue
<<<<<<< HEAD
    return  this.store.length
=======
    return this.store.length
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
  }

  enqueue(ele) {
    //adds ele to end of queue
    this.store.push(ele)
<<<<<<< HEAD
    return true
=======
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
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
