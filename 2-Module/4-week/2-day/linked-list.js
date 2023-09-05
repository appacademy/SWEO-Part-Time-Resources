class LinkedListNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
		this.prev = prev
  }
}


class LinkedList {
  constructor() {
    this.head = null;
		this.tail = null;
  }

	enqueue() {
		
	}
	
	dequeue() {

	}

}

let newList = new LinkedList()

let newNode = new LinkedListNode("Im first")

newList.head = newNode

newList.tail = newNode

let newNode2 = new LinkedListNode("Im Second")

newList.head.next = newNode2
newNode2.prev = newList.tail
newList.tail = newNode2
console.log(newList)
