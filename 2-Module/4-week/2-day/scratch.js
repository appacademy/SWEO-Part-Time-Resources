// class Stack {
//   constructor(){
//     this.data = [];
//     this.length = 0;
//   }

//   push(val){
//     this.data[this.length] = val;
//     this.length++;
//     return this.length;
//   };

//   pop(){
//     let popped = this.data[this.length - 1];
//     this.data[this.length - 1] = undefined;
//     this.length--;
//     return popped;
//   }

//   peek(){
//     return this.data[this.length - 1];
//   }

//   printAll(){
//     if(!this.length) return 0
//     for(let i = this.length - 1; i >= 0; i--){
//       console.log(this.data[i]);
//     }
//   }
// }

// const history = new Stack();
// // console.log(history);
// // history.push('wikipedia');
// // history.push('google');
// // history.push('aao');
// // console.log(history);
// // let removed = history.pop();
// // console.log(history);
// // console.log(removed);
// // console.log(history);
// // console.log(history.peek());
// // console.log(history);
// console.log(history.printAll());


class Queue {
  constructor(){
    this.data = [];
    this.length = 0;
  }

  enqueue(val){ //push
    this.data[this.length] = val;
    this.length++
    return this.length;
  }

  dequeue(){ //shift
    let copy = this.data.slice(1);
    // for(let i = 0; i < this.length; i++){
    //   this.data[i] = this.data[i + 1];
    // }
    this.data = copy;
    this.length--;
  }

  peek(){
    return this.data[0];
  }

  size(){
    return this.length;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.size());
