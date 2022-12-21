# M2-W4-D3

## Warmup Problem (25m)

Convert this stack to use the given linked list instead of an array for its data storage.

```js
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  addToHead(val){
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++

    return newNode;
  }

  removeFromHead(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      const newHead = oldHead.next;
      this.head = newHead;
      this.length--;
      return oldHead;
    }

    return null;
  }

  addToTail(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.length++;
      return newNode;
    };

    const currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  removeFromTail(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      let currNode = this.head;

      while(currNode.next.next){
        currNode = currNode.next;
      }

      const oldTail = currNode.next;
      currNode.next = null;
      return oldTail;
    }

    return null;
  }


  printListValues(){
    let currNode = this.head;

    while(currNode){
      console.log(currNode.val);
      currNode = currNode.next;
    };
  }
};

class Stack {
  constructor(){
    this.data = [];
    this.length = 0;
  }

  push(val){
    this.data.push(val);
    this.length++;
    return this.length;
  }

  pop(){
    let popped = this.data.pop();
    this.length--;
    return popped;
  }

  peek(){
    return this.data[this.length - 1]
  }

  printAll(){
    for(let i = this.length - 1; i >= 0; i--){
      console.log(this.data[i]);
    }
  }
}
```

---

## Long Practice

We will start to approach long practices a little bit differently due to some
student feedback throughout the part time program. This will mean closing rooms
about once an hour to check in and see if there are any major points of
confusion that we can help cover as a group before going back into breakout
rooms.

---

## Closing Group Practice

Convert this queue from an using an array to using the given linked list.

```js
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  addToHead(val){
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++

    return newNode;
  }

  removeFromHead(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      const newHead = oldHead.next;
      this.head = newHead;
      this.length--;
      return oldHead;
    }

    return null;
  }

  addToTail(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.length++;
      return newNode;
    };

    const currNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  removeFromTail(){
    if(this.head){
      const oldHead = this.head;

      if(this.length === 1){
        this.head = null;
        this.length--;
        return oldHead;
      }

      let currNode = this.head;

      while(currNode.next.next){
        currNode = currNode.next;
      }

      const oldTail = currNode.next;
      currNode.next = null;
      return oldTail;
    }

    return null;
  }


  printListValues(){
    let currNode = this.head;

    while(currNode){
      console.log(currNode.val);
      currNode = currNode.next;
    };
  }
};

class Queue {
  constructor(){
    this.data = [];
    this.length = 0;
  }

  enqueue(val){
    this.length++;
    return this.data.push(val);
  }

  dequeue(){
    this.length--;
    return this.data.shift();
  }

  peek(){
    return this.data[0];
  }

  size(){
    return this.length;
  }

  printAll(){
    this.data.forEach(el => console.log(el));
  }
}

```

---
