class Queue {
  constructor() {
    this.store = new Array();
  }

  size() {
    return this.store.length;
  }

  enqueue(ele) {
    this.store.push(ele);
    return this.store.length;
  }

  dequeue() {
		return this.store.shift()
	}

  peek() {
		return this.store[0]
  }
}
