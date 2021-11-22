class Queue {
  constructor() {
    this.store = []
  }

  size() {
    return this.store.length
  }

  enqueue(ele) {
    this.store.push(ele)
    return true
  }

  dequeue() {
    this.store.shift()
  }

  peek() {
    return this.store[0]
  }
}
